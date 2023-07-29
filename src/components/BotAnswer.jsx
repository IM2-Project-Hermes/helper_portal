import React from "react";
import { useState, useEffect } from "react";

const BotAnswer = ({ question }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch();
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
    <div>
      <div className="box-container flex-col  gap-4 p-3">
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
  );
};

export default BotAnswer;
