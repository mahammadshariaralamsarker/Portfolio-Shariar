import React from "react";
import { NavLink } from "react-router-dom";

function Project({ id, title, image, description, techstack, previewLink, githubLink }) {
   

  return (
    <>
      <article className="rounded-xl mt-10 overflow-hidden shadow-md border-2 border-solid-white shadow-[#428DE5]">
        <img className="h-56 w-full" src={image} alt="" loading="lazy" />
        <div className="dark:bg-dark-card p-4">
          <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
          <p className="text-content pt-4 font-light">{description}</p>
          <h3 className="text-dark-heading dark:text-light-heading font-medium pt-4">
            Tech Stack : <span className="font-light">{techstack}</span>
          </h3>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center">
              <a
                href={previewLink}
                target="_blank"
                rel="noreferrer noopener"
                className="underline pl-2 font-light dark:text-white"
              >
                Live Preview
              </a>
            </div>
            <div className="flex items-center">
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer noopener"
                className="underline pl-2 font-light dark:text-white"
              >
                View Code
              </a>
            </div>
          </div>
          <NavLink
          to={`/project/${id}`}

            className="mt-4 underline font-light dark:text-white"
            
          >
            View Project Details
          </NavLink>
        </div>
      </article>

     
    </>
  );
}

export default Project;
