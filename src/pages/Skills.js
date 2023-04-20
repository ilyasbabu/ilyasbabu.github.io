import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGitlab,
  FaReact,
  FaLinux,
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
  SiGnubash,
  SiFastapi,
} from "react-icons/si";
import {
  BsBraces,
} from "react-icons/bs"

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
    Icon: <FaReact />,
    name: "ReactJS",
  },
  {
    Icon: <SiPostgresql />,
    name: "PostgreSQL",
  },
  {
    Icon: <SiMysql />,
    name: "MySQL",
  },
  {
    Icon: <BsBraces />,
    name: "RESTapi",
  },
  {
    Icon: <SiFastapi />,
    name: "FastAPI",
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
    Icon: <FaGitlab />,
    name: "Gitlab",
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
  {
    Icon: <SiGnubash />,
    name: "Bash",
  },
  {
    Icon: <FaLinux />,
    name: "Linux",
  },
];

const Skills = () => {
  return (
    <div className="my-8">
      <label className="text-3xl sm:text-5xl font-bold text-gray-300 font-sans">
        <span className="gradient-text">Some tools</span> that I play with{" "}
        <br className="hidden md:block" /> on a daily basis
      </label>
      <div className="flex flex-wrap my-8 justify-center sm:justify-start hover:text-white">
        {data.map((item) => (
          <div
            key={item.Icon}
            className="md:w-36 w-32 py-4 border rounded-md m-2 transition ease-in-out duration-300 text-gray-300 hover:shadow-lg hover:bg-white hover:text-black"
          >
            <div className="flex text-lg md:text-xl flex-col items-center justify-center font-semibold " >
              {item.Icon}{" "}
              <span className="text-lg pt-2">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      <div>
        <label className="text-xl font-semibold text-gray-300">
          {/* Currently Learning&nbsp; */}
          <span className="text-white underline ">
            {/* ReactJs */}
            <br /><br /><br /><br /><br /><br /></span>{" "}
        </label>
      </div>
    </div>
  );
};

export default Skills;
