import React from "react";
import {
  FaLaptopCode,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTools,
  FaSuitcase,
} from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BottomIcons = {
  Home: {
    Icon: <RiHome7Fill />,
    url: "/",
  },
  Projects: {
    Icon: <FaLaptopCode />,
    url: "/projects",
  },
  Skills: {
    Icon: <FaTools />,
    url: "/skills",
  },
  Experience: {
    Icon: <FaSuitcase />,
    url: "/experience",
  },
};

const BottomTab = () => {
  return (
    <div className="max-w-xl  lg:max-w-screen-xl mx-auto flex justify-center">
      <div className="fixed bottom-4 bg-black rounded-2xl z-20 w-11/12 md:w-3/4 lg:w-2/5">
        <div className="h-16 px-4 border  rounded-2xl cl-div overflow-auto space-x-6 text-2xl sm:text-3xl sm:space-x-10 flex justify-center items-center">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive
                ? "text-gray-400 "
                : "text-gray-50  hover:scale-150 transition duration-300"
            }
          >
            <RiHome7Fill className="ml-12 sm:ml-0" />
          </NavLink>
          <NavLink
            to="/projects"
            className={(navData) =>
              navData.isActive
                ? "text-gray-400"
                : "text-gray-50 hover:scale-150 transition duration-300"
            }
          >
            <FaLaptopCode />
          </NavLink>
          <NavLink
            to="/skills"
            className={(navData) =>
              navData.isActive
                ? "text-gray-400"
                : "text-gray-50 hover:scale-150 transition duration-300"
            }
          >
            <FaTools />
          </NavLink>
          <NavLink
            to="/experience"
            className={(navData) =>
              navData.isActive
                ? "text-gray-400"
                : "text-gray-50 hover:scale-150 transition duration-300"
            }
          >
            <FaSuitcase />
          </NavLink>
          <a
            href="https://twitter.com/ely_bbu"
            target="_blank"
            className="text-gray-50 hover:scale-150 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ilyas-babu/"
            target="_blank"
            className="text-gray-50 hover:scale-150 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/ilyasbabu"
            target="_blank"
            className="text-gray-50 hover:scale-150 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:ilyasbabuvp@gmail.com"
            target="_blank"
            className="text-gray-100  hover:scale-150 transition duration-400"
          >
            <MdMarkEmailUnread />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomTab;
