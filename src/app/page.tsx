import Image from "next/image";
import burger from "../../public/burger-menu.svg";
import { FormTextInput } from "@/components/FormInput";

const LoginPage = () => {
  return (
    <div className="w-screen h-screen bg-orange-200 p-4">
      <div className="flex flex-col items-center bg-slate-500 bg-opacity-50 w-full h-full rounded-md">
        <div className="border-4 border-amber-300 rounded-sm">
          <Image src={burger} alt="test" width={200} height={200} />
        </div>
        <form className="flex flex-col mx-4" action="">
          <FormTextInput label="email" placeholder="username@gmail.com">
            Email
          </FormTextInput>
          <FormTextInput label="password" placeholder="*******">
            Password
          </FormTextInput>
          <button
            className="text-amber-300 bg-white rounded-sm mt-3"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


export default LoginPage;
