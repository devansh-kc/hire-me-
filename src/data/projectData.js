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
    Link: "https://github.com/devansh-kc/Music-Academy-next-js",
    description:
      "So I made this project by using next js because i want to learn how frontend dev works in next js. ",
    header: academy,
  },
  {
    id: 2,
    title: "Blog App using react and Appwrite",
    Link: "https://github.com/devansh-kc/blog-App",
    description:
      "I have used react,redux,react-hook-form and appwrite to make this  project.",
    header: Blog,
  },
  {
    id: 3,
    title:
      "Youtube backend clone using nodejs mongodb,and express and many more",
    Link: "https://github.com/devansh-kc/Mern-stack-video-streaming-app",
    description:
      "It is a backend project made  with mongodb as database, Node.js as runtime enviroment express and axios for API and i have enabled jwt for Auth and currently I am working on the frontend part of this project .",
    header: YTClone,
  },
  {
    id: 4,
    title: "Next auth",
    Link: "https://github.com/devansh-kc/next-auth",
    description:
      "So I have made this authentication app using next js , because i want to learn how authentication works in next js . ",
    header: NextAuth,
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
