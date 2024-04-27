import React from "react";
import Image from "next/image";
import tea from "../../../public/profileimg/tea.jpg";

interface ImgAndAltProp {
  image: string;
  title: string;
}
const ProjectImg: React.FC<ImgAndAltProp> = ({ image, title }) => {
  return (
    <Image
      priority={true}
      src={image || tea}
      height={400}
      width={400}
      alt={title || "Image"}
    />
  );
};

export default ProjectImg;
