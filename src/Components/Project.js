import React from "react";
import { NavLink } from "react-router-dom";

function Project({ id, title, image, description, techstack, previewLink, githubLink }) {
   

  return (
    <>
      <article className="rounded-xl mt-10 overflow-hidden shadow-md border-2 border-solid-white shadow-[#428DE5]">
        <img className="h-56 w-full" src={image} alt="" loading="lazy" />
        <div className="dark:bg-dark-card p-4">
          <h1 className="dark:text-light-heading font-semibold text-lg pt-1">{title}</h1>
          <p className="text-content pt-4 font-light">
            {description.length > 200 ? `${description.slice(0, 200)}...` : description}
          </p>

         
          <NavLink
            to={`/project/${id}`}
            type="button"
            className="mt-4 w-full text-center rounded-2xl p-2 text-white bg-emerald-600 font-primary bg-primary"
          >
            View Project Details
          </NavLink>
        </div>
      </article>
    </>
  );
}

export default Project;
