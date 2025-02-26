import React from "react";
import Image from "next/image";

interface Props{
    imgUrl: string;
    alt: string;
    value: number;
    title: string;
}
const Metric = ({imgUrl, alt, value, title, href}: Props) => {
  return (
    <div className="flex-between flex flex-row items-center justify-center gap-1">
        <Image src={imgUrl} width={20} height={20} alt={alt} ></Image>
        <p className="text-pxs">{title}</p>
    </div>
  );
};

export default Metric;