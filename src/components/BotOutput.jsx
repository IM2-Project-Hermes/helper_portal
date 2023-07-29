import React from "react";
import { useState } from "react";
import BotAnswer from "./BotAnswer";

const BotOutput = () => {
  const [question, setQuestion] = useState("");

  return (
    <>
      <BotAnswer question={question} />
      <BotSources data={question} />
    </>
  );
};

export default BotOutput;
