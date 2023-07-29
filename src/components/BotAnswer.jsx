import React from "react";
import { useState, useEffect } from "react";

const BotAnswer = ({ question }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response =
          await fetch(/* `https://europe-west3-project-hermes-390519.cloudfunctions.net/api?question=[${question}]` */);
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
    <div className="box-container flex-col justify-between h-64 gap-4 p-3">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data ? (
            <div>
              <h2 className="font-bold">{question}?</h2>
              <p>{data.result.answer}</p>
            </div>
          ) : (
            <p>No data available.</p>
          )}
        </>
      )}
      <div className="border-t-2">
        <h2>Sources:</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data ? (
              <div>
                <a
                  href={`https://www.schelix.de/${data.result.sources}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.result.sources}
                </a>
              </div>
            ) : (
              <p>No data available.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BotAnswer;
