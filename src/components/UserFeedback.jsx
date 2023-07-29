import React from "react";
import thumbsUp from "../../public/thumbs-up.svg";
import thumbsDown from "../../public/thumbs-down.svg";
import plus from "../../public/plus.svg";
import Image from "next/image";
import "@styles/user-feedback.css";

const UserFeedback = () => {
  return (
    <div className="feedback-container flex justify-evenly items-center h-12 mt-5 gap-4">
      <div className="item like">
        <div>
          <Image src={thumbsUp} alt="thumbs up" />
        </div>
        <p>Good</p>
      </div>
      <div className="item add">
        <div>
          <Image src={plus} alt="add answer" />
        </div>
      </div>
      <div className="item dislike">
        <div>
          <Image src={thumbsDown} alt="thumbs down" />
        </div>
        <p>Bad</p>
      </div>
    </div>
  );
};

export default UserFeedback;
