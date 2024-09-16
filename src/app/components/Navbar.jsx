"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import Logo from "./Logo.jsx";
import { Moon, Sun } from "./SunMoon.jsx";
import { FaLightbulb } from "react-icons/fa";
import { ThemeSwitch } from "./ThemeSwitch.jsx";

function NavLink({ to, children }) {
  return (
    <a
      href={to}
      className={`mx-4 pt-4 text-dark hover:text-cyan dark:text-white dark:hover:text-yellow-500 text-xl text-dark`}
    >
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen, theme, handler }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-black transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div
        className={`flex items-center justify-center filter drop-shadow-md dark:bg-black h-20`}
      >
        {/*logo container*/}
        <a
          suppressHydrationWarning={true}
          className="text-xl font-semibold "
          href="/"
        >
          <Logo theme={theme} className="bg-cyan" />
        </a>
      </div>

      <div className="flex flex-col ml-4">
        <a
          className="text-2xl  my-4 dark:text-white"
          href="/#portfolio"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Portfolio
        </a>

        <a
          className="text-2xl  my-4"
          href="/#contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
        <button
          onClick={handler}
          className=" flex self-center sticky top-4 p-4 my-4 bg-cyan dark:bg-yellow-500 rounded-full drop-shadow-2xl
        "
        ></button>
      </div>
    </div>
  );
}

export default function Navbar({ theme, handler }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex space-between filter bg-transparent  py- h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12  items-center flex">
        <a className="text-2xl flex font-semibold " href="/">
          <Logo />
          <h1 className="text-2xl font-semibold pl-2 font-serif hover:text-cyan dark:text-white dark:hover:text-yellow-500  hover:text-cyan dark:text-white dark:hover:text-yellow-500">
            philjgray.ca
          </h1>
        </a>
      </div>
      <button
        onClick={handler}
        className="self-center top-4 p-1 my-4 rounded-full drop-shadow-2xl"
      >
        {/* <FaLightbulb size={40} className=' hover:fill-cyan dark:fill-white dark:hover:fill-yellow-500 fill-dark dark:bg-dark-toggle light:bg-light-toggle' /> */}
        {/* {theme === 'light' ? <Sun /> : <Moon />} */}
        {/* <ThemeSwitch handler={handler} theme={theme} /> */}
      </button>

      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full dark:bg-white bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full  dark:bg-white bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full  dark:bg-white bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex justify-center">
          <NavLink to="/#contact">Contact</NavLink>
          <NavLink to="/#portfolio">Portfolio</NavLink>
          <button
            onClick={handler}
            className=" flex self-center sticky top-4 p-4 my-4 bg-cyan dark:bg-yellow-500 rounded-full drop-shadow-2xl
        "
          ></button>
        </div>
      </div>
    </nav>
  );
}
