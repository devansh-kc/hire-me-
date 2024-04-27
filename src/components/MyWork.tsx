import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import Image from "next/image";

import { Work } from "../data/projectData";

const MyWork = () => {
  return (
    <main className="h-full w-full ">
      <h1 className="bg-black p-5 m-5  text-center  text-7xl  font-mono">
        Check Out My Work
      </h1>
      <section className="p-10  ">
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {Work.map((item, i) => (
            <Link href={`/projectPage/${item.id}`}>
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={
                  <Image
                    src={item.header}
                    width={300}
                    height={300}
                    alt={item.title}
                  />
                }
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            </Link>
          ))}
        </BentoGrid>
        <div className="m-[5rem]  items-center justify-center text-center">
          <Link href="https://github.com/devansh-kc">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              See All my projects
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default MyWork;
