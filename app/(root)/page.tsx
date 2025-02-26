import Image from "next/image";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import LocalSearch from "@/components/search/LocalSearch";


interface SearchParams {
  searchParams: Promise<{[key: string]: string}>
}

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];


export default async function Home({searchParams} : SearchParams) {

  const session = await auth();
  console.log(session);

  const {query = ""} = await searchParams;

  const filteredQuestions = questions.filter((question) => question.title.toLowerCase().includes(query?.toLowerCase()));


  return (
    <div className="px-16 mt-[16vh] py-16">
      <div className="flex flex-row sm:flex-row justify-between">
        <h1 className="text-h3">All Questions</h1>

        <Button className="!bg-orange-500">
          <Link href={ROUTES.ASK_QUESTIONS} className="">Ask a Question</Link>
        </Button>



      </div>

      <div className="mt-8 flex flex-row w-full">
          <div className="flex-1">
            <LocalSearch imgSrc="/icons/search.svg" placeholder="Search questions..." otherClasses="" route="/"></LocalSearch>
          </div>

          <div>
            Filters
          </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        {
          filteredQuestions.map((question) => (
            <div key={question._id} className="bg2 rounded-md py-4 px-8 w-full">
              <h3>{question.title}</h3>
            </div>
          ))
        }
        
      </div>
    </div>
  );
}
