"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import BotAnswer from "@/components/BotAnswer";
import UserFeedback from "@/components/UserFeedback";

const AnswerPage = () => {
  const searchParams = useSearchParams();
  const question = searchParams.get("question");
  return (
    <div className="page-container">
      <div className="flex flex-col justify-between h-full">
        <BotAnswer question={question} />
        <UserFeedback />
      </div>
    </div>
  );
};

export default AnswerPage;
