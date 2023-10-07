"use client";
import ProjectCard from "./ProjectCard";
import img1 from "@/public/images/project/1.png";
import img2 from "@/public/images/project/3.png";
import img3 from "@/public/images/project/6.png";
import img4 from "@/public/images/project/7.png";
import img5 from "@/public/images/project/5.png";
import img6 from "@/public/images/project/4.png";
import img7 from "@/public/images/project/2.png";
import ProjectTag from "./ProjectTag";
import { useState } from "react";
const projectData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "project 1 next js",
    image: img1,
    gitUrl: "https://github.com/Fardeen2001/e-commerce-clothing-app",
    previewUrl: "https://github.com/Fardeen2001/e-commerce-clothing-app",
    tag: ["All", "Next Js"],
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "project 2 react js",
    image: img2,
    gitUrl: "https://github.com/Fardeen2001/E-Commerce_React_app",
    previewUrl: "https://github.com/Fardeen2001/E-Commerce_React_app",
    tag: ["All", "React Js"],
  },
  {
    id: 3,
    title: "Weather App",
    description: "project 3 weather js",
    image: img3,
    gitUrl: "https://github.com/Fardeen2001/weather-App",
    previewUrl: "https://fardeen2001.github.io/weather-App/",
    tag: ["All", "Javascript"],
  },
  {
    id: 4,
    title: "Simple Spotify clone",
    description: "project 4 spotify",
    image: img4,
    gitUrl: "https://github.com/Fardeen2001/spotifyclone",
    previewUrl: "https://fardeen2001.github.io/spotifyclone/",
    tag: ["All", "Javascript"],
  },
  {
    id: 5,
    title: "Random image portfolio",
    description: "project 5 css",
    image: img5,
    gitUrl: "https://github.com/Fardeen2001/grid-portfolio",
    previewUrl: "https://fardeen2001.github.io/grid-portfolio/",
    tag: ["All", "CSS"],
  },
  {
    id: 6,
    title: "Usability hub landing page",
    description: "project 6 css",
    image: img6,
    gitUrl: "https://github.com/Fardeen2001/spotifyclone",
    previewUrl: "https://fardeen2001.github.io/spotifyclone/",
    tag: ["All", "CSS"],
  },
  {
    id: 7,
    title: "Glassomorpic Signup page",
    description: "project 7 css",
    image: img7,
    gitUrl: "https://github.com/Fardeen2001/spotifyclone",
    previewUrl: "https://fardeen2001.github.io/spotifyclone/",
    tag: ["All", "CSS"],
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((item) => item.tag.includes(tag));
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex  justify-center items-center gap-2 md:gap-5 text-sm md:text-base flex-wrap py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={"All"}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Next Js"}
          isSelected={tag === "Next Js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"React Js"}
          isSelected={tag === "React Js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"Javascript"}
          isSelected={tag === "Javascript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name={"CSS"}
          isSelected={tag === "CSS"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            description={item.description}
            imgUrl={item.image}
            gitUrl={item.gitUrl}
            previewUrl={item.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
