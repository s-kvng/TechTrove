import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  { _id : "1", title :"I want to learn react ", description : "How do i go about learning ", tags: [
    {_id : "1", name : "React"},
    {_id : "2", name :"Javascript"}
  ], author : { _id : "1", name: "John doe"},
upvotes : 10,
answers: 5,
views: 100,
createdAt : new Date()
},
{ _id : "2", title :"I want to learn Javascript ", description : "How do i go about learning js ", tags: [
    {_id : "1", name : "js"},
    {_id : "2", name :"Javascript"}
  ], author : { _id : "2", name: "Jane Doe"},
upvotes : 20,
answers: 10,
views: 200,
createdAt : new Date()}

]

interface SearchParams {
  searchParams: Promise<{[key: string] : string}>
}

const Home = async ({searchParams }: SearchParams) => {
  const {query = ""} = await searchParams;

  const filteredQuestions = questions.filter((question)=>(
    query?.toLowerCase() === "" ||
    question.title.toLowerCase().includes(query?.toLowerCase()) ||
    question.description.toLowerCase().includes(query?.toLowerCase()) ||
    question.tags.some((tag) => tag.name.toLowerCase().includes(query?.toLowerCase()))
  ))
  
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
        <LocalSearch imgSrc="/icons/search.svg" placeholder="Search questions..." otherClasses="flex-1" route="/" />
      </section>
     
      <div className=" mt-10 flex w-full flex-col gap-6">
        { filteredQuestions.map((question)=>(
          <p key={question._id}>{question.title}</p>
        ))}
      </div>
    </>
  );
};

export default Home;
