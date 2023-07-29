import React from "react";
import Faq from "./Faq";
import QuestionsTitle from "./QuestionsTitle";

const QuestionsContainer = () => {
  return (
    <div className="border-black border-2 rounded-md mx-5">
      <QuestionsTitle />
      <Faq />
    </div>
  );
};

export default QuestionsContainer;
