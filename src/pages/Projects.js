import React from "react";
import { FaRegEye, FaCode } from "react-icons/fa";
import qbank from "../qbank.png"
import artspo from "../artspo.png"
import certi from "../certi.png"
import kripa from "../kripa.png"

const ProjectsData = [
  {
    title: "Question bank management",
    description:
      "A complete collection of Question & Answers asked on university examinations at UG level",
    image: qbank,
    url: "https://questionbank.kripaelectrolysis.com/",
    github: "https://github.com/ilyasbabu/questio-bank-django",
    techStack: "Django, TailwindCSS, PostgreSQL",
  },
  {
    title: "Arts Sports Event Management",
    description:
      "Web App to manage arts and sports events at college level",
    image:
      artspo,
    url: "https://artsport.kripaelectrolysis.com/",
    github: "https://github.com/ilyasbabu/arts-sports-management-django",
    techStack: "Django, TailwindCSS, PostgreSQL",
  },
  {
    title: "E-Certificate Generator",
    description:
      "Generate E-certificates and send mails to users",
    image: certi,
    url: "https://certificate-generate.kripaelectrolysis.com/",
    github: "https://github.com/ilyasbabu/e-Certificate-generator",
    techStack: "Django, TailwindCSS, Google Auth, APIs",
  },
  {
    title: "Kripa Buisness Website",
    description:
      "Simple responsive Buisness website built using Bootstrap. I've built this website for a client",
    image:
      kripa,
    url: "https://kripaelectrolysis.com/",
    github: "https://github.com/ilyasbabu/kripa-website",
    techStack: "HTML, Bootstrap, Javascript",
  },
];

const Projects = () => {
  return (
    <div className="my-8 ">
      <label className="text-3xl sm:text-5xl font-bold text-gray-300 font-sans">
        Some <span className="gradient-text">cool things</span> that I have
        built
      </label>
      <div className="flex flex-wrap mt-6 mb-28 ">
        {ProjectsData.map((project) => (
          <div className="w-full md:w-2/5 sm:mx-4 mt-4">
            <div className="hover:shadow-gray-700 hover:shadow-lg p-5 rounded-xl bg-black group duration-300 transition">
              <div className="relative mb-6 w-full h-48 bg-gray-900 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt="coverImage"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute opacity-0 transition duration-200 bg-gray-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
                  <ul className="flex flex-wrap space-x-4">
                    <li>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center primary-border rounded-full hover:text-gray-100 p-2 hover:bg-gray-700 duration-500 transition text-gray-700"
                      >
                        <FaRegEye size={28} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className=" flex items-center justify-center primary-border rounded-full hover:text-gray-100 p-2 hover:bg-gray-700 duration-500 transition text-gray-700"
                      >
                        <FaCode size={28} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-gray-50 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 font-semibold truncate">
                {project.description}
              </p>
              <p className="text-gray-50 font-bold">
                Built using -{" "}
                <span className="text-gray-400 ">{project.techStack}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
