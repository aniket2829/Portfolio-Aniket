"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import MyPicture from "../../assets/MyPicture.jpg"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 flex gap-2 flex-col">
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>MYSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 flex gap-2 flex-col">
        <li>Chandigarh Group of Colleges: B.Tech CSE</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 flex gap-2 flex-col">
        <li><a href="https://www.coursera.org/account/accomplishments/verify/BBFU3BMJLY4K?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" target="_blank">Python Data Structures</a></li>
        <li><a href="https://www.udemy.com/certificate/UC-e133e9f6-3a02-4799-a703-4b97ffe148d3/" target="_blank">The Complete Python Bootcamp From Zero to Hero in Python </a></li>
        <li><a href="https://drive.google.com/file/d/1M-tZbnr9_oYWi16tVwtRXMWXukyKi3z9/view?usp=sharing" target="_blank">Tryst Campus Ambassador IIT Delhi</a></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={MyPicture} className="rounded-xl" width={500} height={500} alt="My Picture"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start text-lg mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
