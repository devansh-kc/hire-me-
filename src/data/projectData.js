import Image from "next/image";
import academy from "../../public/assets/musicAcademy.png";
import Blog from "../../public/assets/blog.png";
import YTClone from "../../public/assets/Yt-cloneBackend.png";
import NextAuth from "../../public/assets/nextAuth.png";

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

    github: "https://github.com/devansh-kc/Music-Academy-next-js",
    deployedApp: "https://music-academy-next-js-ten.vercel.app/",
  },
  
  {
    id: 2,
    title: "Blog App using react and Appwrite",
    Link: "https://github.com/devansh-kc/blog-App",
    description:
      "The Blog App is a full-stack web application designed to facilitate the creation, management, and display of blog posts. It provides a user-friendly interface for authors to write and publish their content, and for readers to browse and engage with the posts. This project demonstrates a comprehensive use of modern web development technologies and best practices, focusing on performance, scalability, and user experience",
    header: Blog,
    github: "https://github.com/devansh-kc/Music-Academy-next-js",
    deployedApp: "https://music-academy-next-js-ten.vercel.app/",

    TecUsed:
      "<li>Frontend: React.js</li><li>Backend: Appwrite </li><li>Database: Appwrite Database</li><li>Authentication: Appwrite Auth</li><li>Styling: CSS Modules, Tailwind CSS</li><li>Hosting: Vercel</li>",
  },
  {
    id: 3,
    title:
      "Youtube backend clone using nodejs mongodb,and express and many more",
    github: "https://github.com/devansh-kc/Mern-stack-video-streaming-app",

    description:
      "It is a backend project made  with mongodb as database, Node.js as runtime enviroment express and axios for API and i have enabled jwt for Auth and currently I am working on the frontend part of this project .",
    header: YTClone,
  },
  {
    id: 4,
    title: "Next auth",
    github: "https://github.com/devansh-kc/next-auth",

    description:
      "So I have made this authentication app using next js , because i want to learn how authentication works in next js . ",
    header: NextAuth,
  },
  {
    id: 5,
    title: "Anonymous messaging app",
    github: "https://github.com/devansh-kc/anonymous-feedback",
    deployedApp: "https://anonymous-feedback-rho.vercel.app/",
    header: NextAuth,
    description:
      "An anonymous messaging app built with Next.js, TypeScript, and MongoDB, featuring Zod for schema validation, JWT and NextAuth for secure user sessions, and Google Generative AI for message generation. Hosted on GitHub, this app ensures user privacy and encourages honest feedback.",
  },  
 
];
