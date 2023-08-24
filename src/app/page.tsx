"use client";
import Image from "next/image";
import QuestionsContainer from "@/components/QuestionsContainer";
import UserQuestion from "@/components/UserQuestion";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="flex justify-center items-center">
        <Image src="/hella-logo.svg" alt="logo" width={425} height={283}/>
      </div>
      <UserQuestion />
      <QuestionsContainer />
    </div>
  );
};

export default HomePage;
