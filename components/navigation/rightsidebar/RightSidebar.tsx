import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import TagCard from "@/components/cards/TagCard";


const topQuestions = [
  {_id: "1", title: "How to create a custom hook in React?"},
  {_id: "2", title: "How to use React Query?"},
  {_id: "3", title: "How to use Redux"},
  {_id: "4", title: "How to use React Router"},
  {_id: "5", title: "How to use React Context"}
];

const popularTags = [
  {_id: "1", name:"React", questions: 200},
  {_id: "2", name:"Javascript", questions: 100},
  {_id: "3", name:"Typescript", questions: 25},
  {_id: "4", name:"NextJS", questions: 150},
  {_id: "5", name:"React-Query", questions: 75},

];

const RightSidebar = () => {
  return (
    <div className='custom-scrollbar bg1 sticky mt-[16vh] flex h-screen w-72 flex-col gap-16 overflow-y-auto border-l border-t border-slate-950/10 dark:border-slate-50/10 p-8 shadow-sm max-xl:hidden'>
      <div>
        <h3 className='text-h3'>Top Questions</h3>
        <div className="my-4 h-px w-full bg-slate-950/10 dark:bg-slate-50/10"></div>
        
        <div className='mt-6 flex w-full flex-col gap-6'>
          {
            topQuestions.map((question) => (
              <Link href={ROUTES.PROFILE(question._id)} key={question._id} className="flex  cursor-pointer items-center justify-between gap-8">
                <p className="text-psm">{question.title}</p>
                <Image src="/icons/chevron-right.svg" width={20} height={20} alt="chevron"></Image>
              </Link>
            ))
          }
        </div>
      </div>

      <div>
        <h3 className='text-h3'>Popular Tags</h3>
        <div className="my-4 h-px w-full bg-slate-950/10 dark:bg-slate-50/10"></div>
        
        <div className='mt-6 flex w-full flex-col gap-6'>
          {
            popularTags.map((tag) => (
             <TagCard key={tag._id} _id={tag._id} name={tag.name} questions={tag.questions} showCount compact></TagCard>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;