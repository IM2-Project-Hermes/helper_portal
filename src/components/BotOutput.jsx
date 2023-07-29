"use client";
import React from "react";
import { useState } from "react";
import BotAnswer from "./BotAnswer";
import BotSources from "./BotSources";
import UserQuestion from "./UserQuestion";

const BotOutput = () => {
  const [question, setQuestion] = useState("");

  const handleDataChange = (newQuestion) => {
    setQuestion(newQuestion);
  };

  return (
    <>
      <UserQuestion onQuestionChange={handleDataChange} />
      <BotAnswer question={question} />
    </>
  );
};

export default BotOutput;
