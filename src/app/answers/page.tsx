"use client";
import React from "react";
import BotOutput from "../../components/BotOutput";
import { useSearchParams } from "next/navigation";
import BotAnswer from "@/components/BotAnswer";
import BotSources from "@/components/BotSources";

const AnswerPage = () => {
  const searchParams = useSearchParams();
  const question = searchParams.get("question");
  return (
    <div className="page-container">
      <BotAnswer question={question} />
    </div>
  );
};

export default AnswerPage;
