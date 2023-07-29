import Image from "next/image";
import burger from "../../public/burger-menu.svg";
import BotContainer from "@/components/BoxContainer";
import QuestionsContainer from "@/components/QuestionsContainer";

const LoginPage = () => {
  return (
    <div className="page-container">
      <BotContainer />
      <QuestionsContainer />
    </div>
  );
};

export default LoginPage;
