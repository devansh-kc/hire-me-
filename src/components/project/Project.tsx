"use client";
import React from "react";
import { Work } from "@/data/projectData";
import { useParams } from "next/navigation";
import ProjectImg from "./ProjectImg";
import tea from "../../../public/profileimg/tea.jpg"
const Project = () => {
  const { id }:any = useParams();
  const foundProject = Work.find((project) => project.id == id);
  return (
    <section>
      <main>
        <div className="text-center items-center justify-between">
          <ProjectImg
            image={foundProject?.header}
            title={foundProject?.title || ""}
          />
          <p>{foundProject?.title}</p>

        </div>
      </main>
    </section>
  );
};

export default Project;
