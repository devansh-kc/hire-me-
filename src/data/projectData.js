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

    TecUsed:
      "<li>Next.js: Framework for building server-rendered React applications.</li> <li>TypeScript: Adds type safety to JavaScript, ensuring more reliable code.</li> <li>Tailwind CSS: Utility-first CSS framework for rapid UI development.</li>",
  },
  {
    id: 2,
    title: "Blog App using react and Appwrite",
    Link: "https://github.com/devansh-kc/blog-App",
    description:
      "The Blog App is a full-stack web application designed to facilitate the creation, management, and display of blog posts. It provides a user-friendly interface for authors to write and publish their content, and for readers to browse and engage with the posts. This project demonstrates a comprehensive use of modern web development technologies and best practices, focusing on performance, scalability, and user experience",
    bulletPoints:
      "User Authentication: Secure user authentication and authorization using Appwrite, ensuring that only authenticated users can create, edit, or delete blog posts.CRUD Operations: Full CRUD (Create, Read, Update, Delete) functionality for blog posts, allowing users to manage their content effortlessly.Rich Text Editor: Integrated rich text editor for composing blog posts with formatting options, enhancing the writing experience for authors.Responsive Design: Fully responsive layout, ensuring optimal viewing and interaction experience across various devices and screen sizes.SEO Optimization: Implemented SEO best practices to improve the visibility and search engine ranking of blog posts.Performance Optimization: Focused on performance improvements to ensure fast load times and smooth interactions.Database Integration: Utilized Appwrite's database services for data storage, providing a robust and scalable solution for managing blog posts and user data.Error Handling: Comprehensive error handling and validation using Zod, ensuring data integrity and providing meaningful feedback to users.",
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
    title: "anonyms messaging app",
    github: "https://github.com/devansh-kc/anonymous-feedback",
    deployedApp: "https://anonymous-feedback-rho.vercel.app/",
    header: NextAuth,
    description:
      "So I have made this authentication app using next js , because i want to learn how authentication works in next js . ",
  },
  // {
  //   title: "The Pursuit of Knowledge",
  //   description: "Join the quest for understanding and enlightenment.",
  //   header: <Skeleton />,
  //   icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  // },
];
