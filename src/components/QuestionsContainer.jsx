import React from "react";
import Faq from "./Faq";
import QuestionsTitle from "./QuestionsTitle";
import "@styles/question-container.css";

const QuestionsContainer = () => {
  return (
    <div className="questions-container border-black border-2 mx-5">
      <QuestionsTitle />
      <Faq />
    </div>
  );
};

export default QuestionsContainer;
