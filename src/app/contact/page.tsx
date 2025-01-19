"use client";

import React, { useState } from "react";
import Navbar from '../components/Navbar';

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  company_size: "1-10" | "11-50" | "51-200" | "200-500" | "501-1000" | "1000+",
  help: "Need More" | "Learn More" | "Asking About Planning" | "Other";
  services:
    | "Running Ads"
    | "Social Media Management"
    | "Website Development";
  info: string;
  terms: boolean;
};

export default function ContactForm() {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    job_title: "",
    company_name: "",
    company_size: "1-10",
    help: "Learn More",
    services: "Website Development",
    info: "",
    terms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>{
    const {name, value, type} = e.target;
    setFormData((prevData)=> ({
      ...prevData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);


  try {
    const response = await fetch('/api/contact', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if(response.ok) {
      setSubmitStatus('Form submitted successfully');
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        job_title: "",
        company_name: "",
        company_size: "1-10",
        help: "Learn More",
        services: "Website Development",
        info: "",
        terms: false
      });
    } else {
      setSubmitStatus('Failed to submit form. Please try again.');
    }
  } catch (error) {
    console.error('Error submitted form.', error);
    setSubmitStatus('An error occurred. Please try again later.')
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <div className=" w-full   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToSocialMedia={() => {}}
        scrollToBrand={() => {}}
      />
      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our sales team
          </div>
          <div
            className="
              
              py-4
              text-gray-300
                    "
          >
            Let&apos;s talk about how Bird can help your team work better.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                One flexible agency for your entire company to share knowledge,
                ship projects, and collaborate.
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                Enterprise features to securely manage user access and security.
              </div>
            </div>

            <div className="flex gap-4  ">
              <div className=" font-normal pb-4 ">
                Dedicated support to work with you on your setup and help you
                build the best plan for your company.
              </div>
            </div>
          </div>
        </div>

       
       <div className="border-white rounded-md border-[2px] p-5">
        <form onSubmit={handleSubmit} action="" method="post" className="space-y-2">

          <div className="w-full md:flex-row flex flex-col gap-3">
            <div className="md:w-1/2 w-full">
            <label htmlFor="first_name" className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">First Name *</label>
            <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} className=" w-full border rounded-md py-1 focus:outline-none" required />
            </div>
            <div className="md:w-1/2 w-full">
            <label htmlFor="last_name" className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Last Name *</label>
            <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} className=" w-full border rounded-md py-1 focus:outline-none" required />
            </div>
          </div>

          <div className=" w-full">
            <label htmlFor="email" className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Email *</label>
            <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className=" w-full border rounded-md py-1 focus:outline-none" required />
            </div>

            <div className=" w-full">
            <label htmlFor="company_name" className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Company Name *</label>
            <input type="text" id="company_name" name="company_name" value={formData.company_name} onChange={handleChange} className=" w-full border rounded-md py-1 focus:outline-none" required />
            </div>


            <div className="">
            <label htmlFor="company_size" className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 focus:outline-none">Company Size*</label>
            <select name="company_size" value={formData.company_size} onChange={handleChange} id="company_size" className=" w-full border rounded-md py-1">
              <option value="1-10" className=" w-full border rounded-md py-1">1-10</option>
              <option value="11-20">11-20</option>
              <option value="21-50">21-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="501-1000">501-100</option>
              <option value="1000+">1000+</option>
            </select>
            </div>


            <div className="">
            <label htmlFor="services" className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 focus:outline-none">Services *</label>
            <select name="services" value={formData.services} onChange={handleChange} id="services" className=" w-full border rounded-md py-1">
              <option  value="Website Development" className=" w-full border rounded-md py-1">Website Development</option>
              <option value="Social Media Management">Social Media Management</option>
              <option value="Running Ads">Running Ads</option>
            </select>
            </div>


            <div className="">
            <label htmlFor="help" className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 focus:outline-none">Help *</label>
            <select name="help" value={formData.help} onChange={handleChange} id="help" className=" w-full border rounded-md py-1">
              <option  value="Need More" className=" w-full border rounded-md py-1">Need More</option>
              <option value="Learn More">Learn More</option>
              <option value="Running Ads">Asking About Planning</option>
              <option value="Other">Other</option>
            </select>
            </div>

            <div className=" w-full">
            <label htmlFor="info" className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 focus:outline-none">Info *</label>
            <textarea rows={4} id="info" name="info" value={formData.info} onChange={handleChange} className=" w-full border rounded-md py-1" required />
            </div>

            <div className=" w-full">
            <label className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
            I agree to the terms and conditions.
            </label>
            </div>

            <button type="submit" className="border-white border-[2px] rounded-xl px-8 mt-4 hover:bg-white hover:text-black transition-ease-in duration-[0.3s] py-2 text-white">Submit</button>


        </form>
       </div>
      </div>
    </div>
  );
}