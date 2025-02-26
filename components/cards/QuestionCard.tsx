import ROUTES from "@/constants/routes";
import { getTimeStamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import TagCard from "./TagCard";
import Metric from "./Metric";
import Image from "next/image";

interface Props {
    question: Question;
}

const QuestionCard = ({question: {_id, title, description, tags, author, createdAt, upvotes, answers, views}}: Props) => {
  return (
    <div className="bg-zinc-900 rounded-xl py-8 px-8 w-full">
        <div className="flex flex-row items-start justify-between gap-4 xs:flex-col">
            <div className="flex flex-col gap-2">
                
                <Link href={ROUTES.QUESTION(_id)}>
                    <p className="text-lg font-semibold">{title}</p>
                </Link>
                <p className="text-psm">{description}</p>
                
            </div>
            <div className="flex flex-wrap gap-2">
                {
                    tags.map((tag) => (<TagCard key={tag._id} _id={tag._id} name={tag.name} compact></TagCard>))
                }
            </div>
            <div className="w-full flex justify-between">
                <div className="profile flex flex-row gap-4 items-center">
                    <Image src={author.image} width={22} height={22} alt={author.name} className="rounded-full object-cover"></Image>
                    <p className="text-pxs !text-slate-500">{getTimeStamp(createdAt)}</p>
                </div>
                
                <div className="reactionbar flex flex-row gap-6 items-center">
                    <Metric imgUrl="/icons/like.svg" alt="like" value={upvotes} title="Upvotes"></Metric>
                    <Metric imgUrl="/icons/message.svg" alt="like" value={answers} title="Answers"></Metric>
                    <Metric imgUrl="/icons/eye.svg" alt="like" value={views} title="Views"></Metric>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default QuestionCard;