import lupe from "../../public/lupe.svg";

import styles from "./BoxContainer.module.css";

import Image from "next/image";

interface ContainerProps {}

const BoxContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      <SearchContainer />
      <div className={styles.boxContainer}>
        <div className="rounded-md p-3 bg-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem
            tempore eaque? Ex quam aliquid, quod doloribus alias voluptatem sed
            suscipit ut iste repellendus reiciendis aliquam in sapiente animi
            vitae!
          </p>
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
