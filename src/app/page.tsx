"use client";
import Image from "next/image";
import logo from "../../public/hella-logo.svg";
import QuestionsContainer from "@/components/QuestionsContainer";
import UserQuestion from "@/components/UserQuestion";

const LoginPage = () => {
  return (
    <div className="page-container">
      <div className="flex justify-center items-center">
        <Image src={logo} />
      </div>
      <UserQuestion onQuestionChange={undefined} />
      <QuestionsContainer />
    </div>
  );
};

export default LoginPage;
