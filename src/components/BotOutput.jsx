import React from "react";
import { useState } from "react";
import BotAnswer from "./BotAnswer";

const BotOutput = () => {
  const [question, setQuestion] = useState("");

  const handleDataChange = (newQuestion) => {
    setQuestion(newQuestion);
  };

  return (
    <>
      <BotAnswer question={question} />
    </>
  );
};

export default BotOutput;
