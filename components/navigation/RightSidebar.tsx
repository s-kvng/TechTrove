import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in react?" },
  { _id: "2", title: "What is the best way to optimize a React application?" },
  { _id: "3", title: "How to use React Context effectively?" },
  {
    _id: "4",
    title:
      "What is the difference between a class and a functional component in React?",
  },
  { _id: "5", title: "How to make a React component reusable?" },
];

const popularTags = [
  { _id: "1", name: "React", questions: 100 },
  { _id: "2", name: "JavaScript", questions: 200 },
  { _id: "3", name: "CSS", questions: 150 },
  { _id: "4", name: "TypeScript", questions: 120 },
  { _id: "5", name: "Node.js", questions: 80 },
  { _id: "6", name: "React Native", questions: 70 },
];

const RightSidebar = () => {
  return (
    <section className=" custom-scrollbar light-border background-light900_dark200 sticky right-0 top-0 flex h-screen w-[350px] flex-col justify-between gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className=" h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={`${ROUTES.PROFILE(_id)}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className=" body-medium text-dark500_light700">{title}</p>

              <Image
                src="/icons/chevron-right.svg"
                width={20}
                height={20}
                alt="chevron-right"
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className=" mt-5 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
