import React from 'react'
import {useState} from "react";
import lupe from "../../public/lupe.svg";
import Image from "next/image";



const UserQuestion = ({ onQuestionChange }) => {
    const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onQuestionChange(inputValue);
  };

  return (
    <div>
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
        <button className="h-10 w-10 p-1" type="submit">
          <Image src={lupe} alt="test" />
        </button>
      </form>
      <p>Submitted Question: {inputValue}</p>
    </div>
  )
}

export default UserQuestion