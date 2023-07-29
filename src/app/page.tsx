"use client";
import Image from "next/image";
import logo from "../../public/hella-logo.svg";
import QuestionsContainer from "@/components/QuestionsContainer";
import Testing from "@/components/Testing";
import Link from "next/link";
import UserQuestion from "@/components/UserQuestion";

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="flex justify-center items-center">
        <Image src={logo} alt="logo" />
      </div>
      <UserQuestion />
      <QuestionsContainer />
    </div>
  );
};

export default HomePage;
