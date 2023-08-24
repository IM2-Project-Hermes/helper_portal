import React from "react";
import "@styles/question-container.css";

const QuestionsTitle = () => {
  return (
    <div className="title-container flex text-white h-16">
      <div className="faq-title">
        <h1>FAQ</h1>
      </div>
      <div className="last-title">
        <h1>Last Questions</h1>
      </div>
    </div>
  );
};

export default QuestionsTitle;
