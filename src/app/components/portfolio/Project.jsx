import React, { useEffect, useRef } from "react";

import { SecondaryButton } from "../Button";
import { FaGithub, FaMousePointer } from "react-icons/fa";

const Project = ({ project, frameCol }) => {
  return (
    <section
      className={
        project.width === 1
          ? "grid lg:gap-16 gap-1 lg:grid-cols-2  sm:lg:grid-cols-1 grid-rows-1"
          : "grid  gap-1 lg:grid-cols-1 sm:sgrid-cols-1 grid-rows-1"
      }
    >
      <div className={frameCol}>
        <div className="flex justify-between">
          <h1 className="font-serif font-semibold text-4xl py-3">
            {project.title}
          </h1>
          {/* <div className="flex items-end ">
            <p className="font-semibold dark:text-yellow-500 text-cyan pr-1">
              try it out
            </p>
            <FaMousePointer
              size={20}
              className="pb-1 dark:fill-yellow-500 fill-cyan"
            />
          </div> */}
        </div>
        {/* <iframe
          src={project.iframeSrc}
          title={project.title}
          className="aspect-video w-full rounded border-solid border-4 p-5 border-cyan dark:border-yellow-500 "
        ></iframe> */}
        <img src={project.projectImage} alt="" />
      </div>
      <div>
        <p className="text-xl sm:pt-16 pt-4">{project.description}</p>
        <div className={project.projectLink === undefined ? `block ` : "flex "}>
          <a
            href={project.projectLink}
            className={project.projectLink === undefined ? `hidden` : "block "}
          >
            <SecondaryButton text={`View Project`} />
          </a>
          <a
            className={`self-center p-5 
            `}
            href={project.githubLink}
          >
            <FaGithub
              size={40}
              className=" hover:fill-cyan dark:fill-white dark:hover:fill-yellow-500 fill-dark"
            />
          </a>
        </div>
        <hr className="border lg:hidden" />
      </div>
    </section>
  );
};

export default Project;
