"use client";
import React from "react";
import { Work } from "@/data/projectData";
import { useParams } from "next/navigation";
import ProjectImg from "./ProjectImg";
import tea from "../../../public/profileimg/tea.jpg";
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
const Project = () => {
  const { id }: any = useParams();
  const foundProject = Work.find((project) => project.id == id);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {foundProject?.title}
            </h2>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold">Project Overview</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {foundProject?.description}
              </p>
            </div>
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold">What I Did</h3>
              <ul className="text-gray-500 dark:text-gray-400">
                  {foundProject?.bulletPoints?.split(".").map((data) => (
                    <li>{data}</li>
                  ))}
              </ul>
              <h3 className="text-2xl font-bold">Tech Stack</h3>
              <ul className="text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{__html:foundProject?.TecUsed!}}></ul>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Image
                  src={foundProject?.header!}
                  alt="Project Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Project Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Project Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                />
                <img
                  src="/placeholder.svg"
                  alt="Project Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Project Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                />
                <Image
                  src="/placeholder.svg"
                  alt="Project Image"
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
