"use client"  
import { useState, useEffect } from "react";
import lupe from "../../public/lupe.svg";

import styles from "./BoxContainer.module.css";

import Image from "next/image";

interface ContainerProps {}

const BoxContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://mocki.io/v1/96a048c4-ef53-4d05-9e6d-ec5e6a28a0f9`); // Use the API URL in the fetch request
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <SearchContainer />
      <div className={styles.boxContainer}>
        <div className="flex flex-col gap-4 rounded-md p-3 bg-white">
        {data ? (
          <>
        <p>{data.answer}</p>
        {data.sources.map((source, index) => (
        <a key={index} href={source.url}>
          {source.name}
        </a>
      ))}
        </>
      ) : (
        <p>Loading data...</p>
      )}
        </div>
      </div>
    </div>
  );
};

export const SearchContainer = () => {
  return (
    <div className={styles.boxContainer}>
      <div className="flex justify-between rounded-md pl-3 h-10 bg-white">
        <input type="text" placeholder="Search"></input>
        <div className="h-10 w-10 p-1">
          <Image src={lupe} alt="test" />
        </div>
      </div>
    </div>
  );
};

export default BoxContainer;
