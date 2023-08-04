import React from "react";
import "@styles/question-container.css";
import FaqQuestions from "./FaqQuestions";

const Faq = () => {
  return (
    <div className="faq-container bg-white p-3">
      <h2 className="font-bold">Frequently Asked Questions</h2>
      <ul className="list-disc pl-8">
        <FaqQuestions question="What is a Radar?" />
        <FaqQuestions question="How expensive is a Radar?" />
        <FaqQuestions question="What is Radar Signal Processing?" />
        <FaqQuestions question="How to rent a car?" />
      </ul>
    </div>
  );
};

export default Faq;
