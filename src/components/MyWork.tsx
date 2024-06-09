import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";
import { FaGithub } from "react-icons/fa";
import { BiLink } from "react-icons/bi";

import { Work } from "../data/projectData";

const MyWork = () => {
  return (
    <section className="h-full w-full py-12 md:py-24 lg:py-32  bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold  font-mono sm:text-5xl">
              Check out my work
            </h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pt-12">
          {Work.map((item, id) => (
            <Card key={id}>
              {/* <Link href="#" className="group block h-full" prefetch={false} > */}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src={item.header}
                  alt="Project 1"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 rounded-b-lg bg-white p-4 dark:bg-gray-950">
                <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
                <div className="flex items-center space-x-2">
                  {item.deployedApp ? (
                    <Link
                      href={item.deployedApp}
                      className="inline-flex items-center space-x-1 text-sm font-medium text-primary transition-colors duration-300 hover:text-primary/80"
                      prefetch={false}
                    >
                      <BiLink className="h-4 w-4" />
                      <span>Live Site</span>
                    </Link>
                  ) : (
                    ""
                  )}

                  <Link
                    href={item?.github}
                    className="inline-flex items-center space-x-1 text-sm font-medium text-primary transition-colors duration-300 hover:text-primary/80"
                    prefetch={false}
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
              {/* </Link> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
