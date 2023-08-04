import React from "react";
import Link from "next/link";

const FaqQuestions = ({ question }) => {
  return (
    <li>
      <Link
        href={{
          pathname: "/answers",
          query: { question: `${question}` },
        }}
      >
        {question}
      </Link>
    </li>
  );
};

export default FaqQuestions;
