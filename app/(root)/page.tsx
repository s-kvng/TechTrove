import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/filters/HomeFilters";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "I want to learn react ",
    description: "Learning react is great",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "1", name: "John doe", image: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "I want to learn Javascript ",
    description: "How do i go about learning js ",
    tags: [
      { _id: "1", name: "js" },
      { _id: "2", name: "Javascript" },
    ],
    author: { _id: "2", name: "Jane Doe", image: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" },
    upvotes: 20,
    answers: 10,
    views: 200,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchQuery =
      query?.toLowerCase() === "" ||
      question.title.toLowerCase().includes(query?.toLowerCase()) ||
      question.description.toLowerCase().includes(query?.toLowerCase()) ||
      question.tags.some((tag) =>
        tag.name.toLowerCase().includes(query?.toLowerCase())
      );

    const matchFilter = filter
      ? question.tags.some((tag) =>
          tag.name.toLowerCase().includes(filter.toLowerCase())
        )
      : true;

    return matchQuery && matchFilter;
  });

  return (
    <>
      <section className=" flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Button
          asChild
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-12">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
          route="/"
        />
      </section>

      <HomeFilters />

      <div className=" mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
