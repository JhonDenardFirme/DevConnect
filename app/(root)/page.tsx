import Image from "next/image";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";
import QuestionCard from "@/components/cards/QuestionCard";


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
    author: { _id: "1", name: "John Doe", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" },
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
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe", image: "https://lh3.googleusercontent.com/a/ACg8ocJVKdEW91TsuE3cLZ10AyyoJywmu1KP4qZvANnc7cBENohUGyg_=s96-c"},
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2021-09-01"),
  },
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe", image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" },
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
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe", image: "https://lh3.googleusercontent.com/a/ACg8ocJVKdEW91TsuE3cLZ10AyyoJywmu1KP4qZvANnc7cBENohUGyg_=s96-c"},
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2021-09-01"),
  },
];

export default async function Home({searchParams} : SearchParams) {

  const session = await auth();
  console.log(session);

  
  const {query = "", filter = ""} = await searchParams;


  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });


  return (
    <div className="px-16 mt-[16vh] py-16">
      <div className="flex flex-row sm:flex-row justify-between">
        <h1 className="text-h3">All Questions</h1>

        <Button className="!bg-orange-500">
          <Link href={ROUTES.ASK_QUESTIONS} className="">Ask a Question</Link>
        </Button>



      </div>

      <div className="mt-8 flex flex-col w-full">
          <div className="flex-1">
            <LocalSearch imgSrc="/icons/search.svg" placeholder="Search questions..." otherClasses="" route="/"></LocalSearch>
          </div>

          <div>
            <HomeFilter></HomeFilter>
          </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        {
          filteredQuestions.map((question) => (
            <QuestionCard key={question._id} question={question}>

            </QuestionCard>

          ))
        }
        
      </div>
    </div>
  );
}
