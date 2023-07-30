import React from "react";
import { useState, useEffect } from "react";

const BotAnswer = ({ question }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://europe-west3-project-hermes-390519.cloudfunctions.net/api?question=[${question}]`
        );

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    if (question) {
      fetchData();
      console.log("fetching data");
    }
  }, []);

  const sourcesRegex = /\/(.*)/;
  return (
    <div className="box-container flex-col justify-between gap-4 p-3 min-h-min">
      {question && <h2 className="font-bold">{question}?</h2>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>{data ? <p>{data.result.answer}</p> : <p>No data available.</p>}</>
      )}
      <div className="border-t-2 border-black p-2">
        <h2>Sources:</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data ? (
              <div className="mt-2">
                <a
                  className="underline"
                  href={`https://www.schelix.de/${data.result.sources}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.result.sources.match(sourcesRegex)[1]}
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
