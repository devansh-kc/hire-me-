"use client";
import React from "react";
import { Work } from "@/data/projectData";
import { useParams } from "next/navigation";
import ProjectImg from "./ProjectImg";

const Project = () => {
  const { id } = useParams();
  const projectId = parseInt(id)
  const foundProject = Work.find((project) => project.id == projectId);
  return (
    <section>
      <main>
        <div className="text-center items-center justify-between">
          <ProjectImg
            image={foundProject?.header}
            title={foundProject?.title}
          />
          <p>{foundProject?.title}</p>

        </div>
      </main>
    </section>
  );
};

export default Project;
