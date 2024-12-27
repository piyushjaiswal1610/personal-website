import React from "react";
import Header from "../../components/layout/Header";

const WorksPage = () => {
    const projects = [
      {
        title: "Project Management System",
        description: "A full-stack application built with Next.js and TypeScript",
        link: "/works/project-management"
      },
      {
        title: "E-commerce Platform",
        description: "Scalable marketplace solution with real-time features",
        link: "/works/ecommerce"
      },
      {
        title: "Data Visualization Dashboard",
        description: "Interactive analytics platform for business metrics",
        link: "/works/dashboard"
      }
    ];
  
    return (
        <React.Fragment>
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-16 my-4">
        <h1 className="text-4xl font-bold italic mb-8">Works</h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          A collection of my notable projects, open-source contributions, and technical writings. 
          Each project represents a unique challenge and learning experience.
        </p>
  
        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.title} className="border-b border-gray-200 dark:border-gray-700 pb-8">
              <h3 className="text-xl font-semibold mb-2">
                <a href={project.link} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      </React.Fragment>
    );
};
  
export default WorksPage