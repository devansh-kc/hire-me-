import Image from "next/image";
import academy from "../../public/assets/musicAcademy.png";
import Blog from "../../public/assets/blog.png";
import Turkify from "../../public/assets/Turkify.png";
import YTClone from "../../public/assets/Yt-cloneBackend.png";
import NextAuth from "../../public/assets/nextAuth.png";
import AnonymsMessage from "../../public/assets/anonyms-messaging-app.png";
import YoutubeClone from "../../public/assets/yt-CloneFrontend.png";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export const Work = [
  {
    id: 1,
    title: "Music academy frontend using Nextjs",
    description:
      "The Music Academy project is a comprehensive platform designed to connect music enthusiasts with professional instructors. It facilitates easy scheduling of music lessons, showcases instructor profiles, and provides resources for learners to enhance their skills.",
    bulletPoints:
      "Resource Library: Front-end design for accessing learning materials like video tutorials and sheet music.Responsive Design: Ensures seamless user experience across all devices.",
    header: academy,

    github: ["https://github.com/devansh-kc/Music-Academy-next-js"],
    deployedApp: "https://music-academy-next-js-ten.vercel.app/",
  },

  {
    id: 6,
    title: " Youtube Clone Front-End using React and Tailwind",
    header: YoutubeClone,
    github: [
      "https://github.com/devansh-kc/Video-streaming-mern-app-frontend- ",
    ],
    description:
      "The front-end of your video streaming application is built with React and Vite, utilizing Tailwind CSS for styling. This setup ensures a responsive and efficient user interface, providing a seamless video streaming experience.",
  },
  {
    id: 2,
    title: "Anonymous messaging app",
    github: ["https://github.com/devansh-kc/anonymous-feedback"],
    deployedApp: "https://anonymous-feedback-rho.vercel.app/",
    header: AnonymsMessage,
    description:
      "An anonymous messaging app built with Next.js, TypeScript, and MongoDB, featuring Zod for schema validation, JWT and NextAuth for secure user sessions, and Google Generative AI for message generation. Hosted on GitHub, this app ensures user privacy and encourages honest feedback.",
  },

  {
    id: 3,
    title:
      "Youtube backend clone using nodejs mongodb,and express and many more",
    github: ["https://github.com/devansh-kc/Mern-stack-video-streaming-app"],

    description:
      "It is a backend project made  with mongodb as database, Node.js as runtime enviroment express and axios for API and i have enabled jwt for Auth and currently I am working on the frontend part of this project .",
    header: YTClone,
  },
  {
    id: 4,
    title: "Data Labeling Platform",

    github: [
      "https://github.com/devansh-kc/Turkify-backend",

      "https://github.com/devansh-kc/Saas-app-user-frontend-",

      "https://github.com/devansh-kc/saas-appworker-frontend",
    ],
    description:
      "This repository contains the backend code for Turkify, a project that integrates AWS services with Web3 payment methods. The goal of Turkify is to facilitate transactions between users and service providers in a secure and efficient manner, leveraging blockchain technology for trustless transactions.",
    header: Turkify,
  },
  {
    id: 5,
    title: "Blog App using react and Appwrite",
    // Link: "https://github.com/devansh-kc/blog-App",
    description:
      "The Blog App is a full-stack web application designed to facilitate the creation, management, and display of blog posts. It provides a user-friendly interface for authors to write and publish their content, and for readers to browse and engage with the posts. This project demonstrates a comprehensive use of modern web development technologies and best practices, focusing on performance, scalability, and user experience",
    header: Blog,
    github: ["https://github.com/devansh-kc/blog-App"],
    deployedApp: "https://blog-app-rho-one.vercel.app/",
  },
];
