"use client";

import Head from "next/head";

import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/Contact";

import {
  FaFigma,
  FaReact,
  FaSass,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { TbBrandOauth, TbBrandNextjs } from "react-icons/tb";

import { Sun, Moon } from "./components/SunMoon";

export default function Home() {
  const { theme, setTheme } = useTheme("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme, setTheme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Head>
        <title>Philjgray.ca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" sizes="32x32" />
      </Head>
      <ThemeProvider attribute="className">
        <Navbar handler={handleThemeSwitch} setTheme={setTheme} />
        {/* <button
          onClick={handleThemeSwitch}
          className=" flex self-center sticky top-4 p-4 my-4 bg-cyan dark:bg-yellow-500 rounded-full drop-shadow-2xl
        "
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button> */}

        <main className="flex  flex-col items-center justify-between pb-24 bg-white-700 ">
          <About />
          <h1 className="text-7xl font-serif pb-10 ">My Portfolio</h1>
          <h2 className="font-serif font-semibold text-2xl">
            what I'm building with
          </h2>
          <div>
            <div className="flex  justify-center">
              <FaHtml5 alt="HTML5" size={60} className="px-3" />
              <FaFigma alt="Figma" size={50} className="px-3 self-center" />
              <FaJs alt="Javascript" size={60} className="px-3" />
              <FaReact alt="React" size={70} className="px-3" />
              <FaSass alt="Sass" size={70} className="px-3" />
              <TbBrandNextjs alt="NextJS" size={60} className="px-3" />
            </div>
            <div className="flex  justify-center">
              <FaCss3 alt="CSS3" size={60} className="px-3" />
              <SiExpress alt="Express" size={60} className="px-3" />
              <SiPostgresql alt="Postgresql" size={60} className="px-3" />
              <SiTailwindcss alt="Tailwind" size={60} className="px-3" />
              <FaNodeJs alt="NodeJS" size={60} className="px-3" />
              <TbBrandOauth alt="Oauth" size={60} className="px-3" />
            </div>
          </div>

          <hr className="border-dark-blue w-full "></hr>
          <Portfolio />

          <Contact />
        </main>
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}
