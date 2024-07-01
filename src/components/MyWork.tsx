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
    <section className=" mt-10 mx-auto max-w-7xl  sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28  ">
      {" "}
      <h2 className="p-6 text-2xl  tracking-tight font-extrabold  sm:text-3xl md:text-4xl">
        Check out my work
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto pt-12">
        {Work.map((item, id) => (
          <Card key={id}>
            {/* <Link href="#" className="group block h-full" prefetch={false} > */}
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={item.header}
                alt={item.title}
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
    </section>
  );
};

export default MyWork;
