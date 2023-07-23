"use client";
import Image from "next/image";
import burger from "../../public/burger-menu.svg";
import Link from "next/link";
import { FC, useState } from "react";
import "@styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Dropdownbutton />
      <LogOut />
    </div>
  );
};

const Dropdownbutton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col relative">
      <button
        onClick={handleOpen}
        className=" bg-white rounded-md p-2 w-10 h-10"
      >
        <Image src={burger} alt="Dropdown Menu" />
      </button>
      {open ? (
        <ul className="absolute top-full">
          <DropdownElement page="/home" name="Home" />
          <DropdownElement page="/uebersicht" name="Übersicht" />
          <DropdownElement page="/timetracker" name="Time" />
          <DropdownElement page="/chatbot" name="Chatbot" />
        </ul>
      ) : null}
    </div>
  );
};

interface ElementProps {
  name: string;
  page: string;
}

export const DropdownElement: FC<ElementProps> = ({ name, page }) => {
  return (
    <Link href={page}>
      <li className="bg-slate-200 border-b-2 border-gray-500">{name}</li>
    </Link>
  );
};

const LogOut = () => {
  return (
    <Link href={"/"}>
      <button className="bg-white rounded-md text-center p-2">Log Out</button>
    </Link>
  );
};

export default Navbar;
