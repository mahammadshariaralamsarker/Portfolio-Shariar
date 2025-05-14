import React from "react";
import { useParams } from "react-router-dom";
import { projectDetails } from "../Details";

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectDetails.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-red-500 text-xl font-semibold">Project not found</div>
      </div>
    );
  }

  return (
    <div className="  container mx-auto   dark:bg-dark-bg  ">
      <div className=" container mx-auto bg-white dark:bg-dark-card   shadow-xl p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-light-heading mb-6">
          {project.title}
        </h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg mb-6 shadow-md"
        />
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          <strong>Description:</strong> {project.description}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>Used Technologies:</strong> {project.techstack}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href={project.previewLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded shadow transition"
          >
            🔗 Live Preview
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-2 rounded shadow transition"
          >
            💻 View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
