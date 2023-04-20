import React from "react";
import resume from "../resume.pdf";
const About = () => {
  return (
    <div className="my-8 pt-9">
      <div className="flex flex-col">
        <div>
          <div className="shadow"></div> 
          <div className="bowl">
            <div className="liquid"></div>
          </div>
        </div>
        <label className="py-4 text-2xl md:text-3xl text-gray-300 font-bold font-sans">
          Hey, It's{" "}
          <span className="text-gray-400 text-3xl md:text-5xl font-extrabold">
            Ilyas Babu
          </span>
        </label>
        <label className="text-4xl sm:text-7xl font-extrabold text-gray-400 py-3">
          I am a <span className="gradient-text">Python </span><br/><span className="gradient-text">Full-stack Developer</span>
        </label>
        <p className="text-md sm:text-xl font-semibold py-3 text-gray-400">
          Passionate developer based in India, constantly experimenting with new technologies and techniques, striving to become a better myself as a developer and I love what I do.
          </p><p className="text-md sm:text-xl font-semibold py-3 text-gray-400"  >{" "}Currently I'm working in{" "}
          <a
            href="https://mdrift.com/"
            target="blank"
            className="underline text-gray-100 hover:text-gray-500"
          >
            mDrift Technologies
          </a>{" "}
          as a Python Full-stack Developer.
        </p>
        <p className="text-gray-300 text-lg font-semibold">
          Is there any prospect for me? Reach me at my{" "}
          <a
            href="mailto:ilyasbabuvp@gmail.com"
            target="blank"
            className="underline text-white font-bold hover:text-gray-500 "
          >
            e-mail
          </a>
        </p>
        <div className="flex items-center">
          <a
            href={resume}
            download="Ilyas Babu Resume Updated April2023"
            className="text-xl flex items-center justify-center font-semibold py-2 my-4 bg-gray-700 text-gray-100 rounded-lg w-52"
          >
            Download my CV{" "}
            <div className="rounded-full h-2 w-2 bg-gray-50 animate-ping ml-2"></div>
          </a>
        </div>
        <p>
          {" "}<br /><br /><br /><br />
        </p>
      </div>
    </div>
  );
};

export default About;
