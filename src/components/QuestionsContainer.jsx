import React from "react";
import Faq from "@/components/Faq";
import QuestionsTitle from "@/components/QuestionsTitle";
import "@styles/question-container.css";

const QuestionsContainer = () => {
  return (
    <div className="questions-container border-black border-2 mt-10">
      <QuestionsTitle />
      <Faq />
    </div>
  );
};

export default QuestionsContainer;
