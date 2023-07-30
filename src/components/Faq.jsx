import React from "react";
import "@styles/question-container.css";

const Faq = () => {
  return (
    <div className="faq-container bg-white p-3">
      <h2 className="font-bold">Frequently Asked Questions</h2>
      <ul className="list-disc pl-8">
        <li>What is a Radar?</li>
        <li>How expensive is a Radar?</li>
        <li>What is Radar Signal Processing?</li>
        <li>How to rent a car?</li>
      </ul>
    </div>
  );
};

export default Faq;
