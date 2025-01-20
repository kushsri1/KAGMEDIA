import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export const runtime = 'nodejs';


export async function POST(req: Request) {
    if (req.method === "POST") {
        try {
            const {
                first_name,
                last_name,
                email,
                company_name,
                company_size,
                help,
                services,
                info,
            } = await req.json();
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "kagmedia0@gmail.com",
                    pass: "anyw qvll cevl xwqf"
                }
            });

            const mailOptions = {
                from: email,
                to: "kagmedia0@gmail.com",
                subject: "Contact Form Submission",
                html: `
                <h1>Contact Form</h1>
                <p>First Name: ${first_name}</p>
                <p>Last Name: ${last_name}</p>
                <p>Work Email: ${email}</p>
            
                <p>Company Name: ${company_name}</p>
                <p>Company Size: ${company_size}</p>
                <p>Service: ${services}</p>
                <p>Help: ${help}</p>
                <p>Info: ${info}</p>
            `,
            }


            await transporter.sendMail(mailOptions);
            console.log("Email Sent", info.resonse);

            return NextResponse.json("Email has been sent!")
        } catch (error) {
            return NextResponse.json("Email has not been sent!")
            console.log(error);
        }
    } else {
        return NextResponse.json("Method now allowed!")
    }
};