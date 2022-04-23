import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiVisualstudiocode,
  SiTailwindcss,
  SiJquery,
  SiDjango,
  SiGithub,
  SiCpanel,
  SiPostgresql,
  SiBootstrap,
  SiHeroku,
} from "react-icons/si";

const data = [
  {
    Icon: <SiDjango />,
    name: "Django",
  },
  {
    Icon: <FaPython />,
    name: "Python",
  },
  {
    Icon: <SiTailwindcss />,
    name: "TailwindCSS",
  },
  {
    Icon: <SiPostgresql />,
    name: "PostgreSQL",
  },
  {
    Icon: <FaGitAlt />,
    name: "Git",
  },
  {
    Icon: <SiGithub />,
    name: "GitHub",
  },
  {
    Icon: <SiMysql />,
    name: "MySQL",
  },
  {
    Icon: <FaHtml5 />,
    name: "HTML5",
  },
  {
    Icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    Icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    Icon: <SiHeroku />,
    name: "Heroku",
  },
  {
    Icon: <SiCpanel />,
    name: "c-Panel",
  },
  {
    Icon: <SiBootstrap />,
    name: "Bootstrap",
  },
  {
    Icon: <SiVisualstudiocode />,
    name: "VS Code",
  },
  {
    Icon: <SiJquery />,
    name: "jQuery",
  },
];

const Skills = () => {
  return (
    <div className="my-8">
      <label className="text-3xl sm:text-5xl font-bold text-gray-300 font-sans">
        <span className="gradient-text">Some tools</span> that I play with{" "}
        <br className="hidden md:block" /> on a daily basis
      </label>
      <div className="flex flex-wrap my-8 justify-center sm:justify-start">
        {data.map((item) => (
          <div
            key={item.Icon}
            className="md:w-36 w-32 py-4 border  rounded-xl m-2 hover:shadow-lg transition duration-500"
          >
            <div className="flex text-lg md:text-xl flex-col items-center justify-center text-gray-300 font-semibold">
              {item.Icon}{" "}
              <span className="text-gray-400 text-lg pt-2">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <label className="text-xl font-semibold text-gray-300">
          Currently Learning{" "}
          <span className="text-white underline ">ReactJs</span>{" "}
        </label>
      </div>
    </div>
  );
};

export default Skills;
