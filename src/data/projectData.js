import Image from "next/image";
import academy from "../../public/assets/musicAcademy.png";
import Blog from "../../public/assets/blog.png";
import YTClone from "../../public/assets/Yt-cloneBackend.png";

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
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: academy,
  },
  {
    id: 2,
    title: "Blog App using react and Appwrite",
    description: "Dive into the transformative power of technology.",
    header: Blog,
  },
  {
    id: 3,
    title:
      "Youtube backend clone using nodejs mongodb,and express and many more",
    description: "Discover the beauty of thoughtful and functional design.",
    header: YTClone,
  },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton />,
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
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
