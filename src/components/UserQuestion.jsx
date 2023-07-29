import React from "react";
import { useState } from "react";
import lupe from "../../public/lupe.svg";
import Image from "next/image";
import Link from "next/link";

const UserQuestion = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="box-container justify-between items-center p-3 h-12 "
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your question..."
      />
      <Link
        href={{
          pathname: "/answers",
          query: { question: `${inputValue}` },
        }}
      >
        <button className="h-10 w-10 p-1" type="submit">
          <Image src={lupe} alt="test" />
        </button>
      </Link>
    </form>
  );
};

export default UserQuestion;
