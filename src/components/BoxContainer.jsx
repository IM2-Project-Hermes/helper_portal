"use client";
import { useState, useEffect } from "react";
import lupe from "../../public/lupe.svg";
import logo from "../../public/hella-logo.svg";
import styles from "./BoxContainer.module.css";
import Image from "next/image";
import "../styles/chat-bot.css";

const BotContainer = () => {
  const [question, setQuestion] = useState("");

  const handleDataChange = (newQuestion) => {
    setQuestion(newQuestion);
  };

  return (
    <>
      <div>
        <Image src={logo}/>
      </div>
      <SearchContainer onQuestionChange={handleDataChange} />
      <AnswerContainer question={question} />
    </>
  );
};

export const SearchContainer = ({ onQuestionChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onQuestionChange(inputValue);
  };

  return (
    <div className={styles.boxContainer}>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between rounded-md pl-3 h-10 bg-white"
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
  );
};

export const AnswerContainer = ({ question }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(/* `https://europe-west3-project-hermes-390519.cloudfunctions.net/api?question=[${question}]` */);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [question]);

  return (
    <div className="flex flex-col gap-4">
      <div className={styles.boxContainer}>
        <div className="flex flex-col gap-4 rounded-md p-3 bg-white">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {data ? (
                <div>
                  <p>{data.result.answer}</p>
                  <a href="">{data.result.sources}</a>
                </div>
              ) : (
                <p>No data available.</p>
              )}
            </>
          )}
        </div>
        <p>Question sent to ChatBot: {question}</p>
      </div>
    </div>
  );
};

export default BotContainer;
