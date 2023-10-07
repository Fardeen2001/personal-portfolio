"use client";
import aboutImg from "@/public/images/about-image.webp";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TabData = [
  {
    title: "skillls",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>REACT JS</li>
        <li>REDUX</li>
        <li>NEXT JS</li>
        <li>TAILWIND CSS</li>
        <li>MATERIAL UI</li>
        <li>BOOTSTRAP</li>
        <li>MONGO DB</li>
        <li>GIT</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <p>B.E - Electronics And Telecommunication Engineering</p>
          <p>Siddaganga Institute of Technology</p>
        </li>
        <br />
        <li>
          <p>Diploma - Electronics And Communication Engineering</p>
          <p>Government Polytechnic Tumkur</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <p>Intern as Fullstack Web Development</p>
          <p>Inventron Technology</p>
        </li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ispending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={aboutImg}
          alt="aboutImage"
          quality={100}
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          {" "}
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a front-end web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Next.js, Mongo Db, Tailwind
            CSS, Material UI, Bootstrap, CSS, Git and API integration. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-5">
            {TabData.find((item) => item.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
