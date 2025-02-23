"use client";
import React, { useState } from "react";
import GithubIcon from "../../assets/Github.svg";
import LinkedinIcon from "../../assets/LinkedIn.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };
    console.log("Sending Data:", data);
  
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const resData = await response.json();
    console.log("Response from backend:", resData);
  
    if (response.status === 200) {
      console.log("Message sent successfully.");
      setEmailSubmitted(true);
    }
  };  

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 sm:py-24 gap-6 relative pt-0"
    >
      <div className=" from-primary-400 to-secondary-600 rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 mr-3">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-6 ml-6 mt-4">
          <Link href="https://github.com/aniket2829">
            <Image src={GithubIcon} alt="Github Icon" width={150} height={150}/>
          </Link>
          <Link href="https://www.linkedin.com/in/aniketdhiman2829/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={150} height={150}/>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="I would like you ask about..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="I would like you ask..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
