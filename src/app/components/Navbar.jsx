"use client"

import { useState } from 'react'

import Logo from './Logo.jsx'

function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen, theme }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white dark:bg-black transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className={`flex items-center justify-center filter drop-shadow-md dark:bg-black h-20`}> {/*logo container*/}
                <a className="text-xl font-semibold " href="/">
                    <Logo theme={theme} />
                </a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-2xl  my-4 dark:text-white" href="/#portfolio" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Portfolio
                </a>
                <a className="text-2xl  my-4" href="/#contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact
                </a>
            </div>
        </div >
    )
}

export default function Navbar({ theme }) {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex space-between filter bg-transparent  pt-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12  items-center">
                <a className="text-2xl flex font-semibold " href="/">
                    <Logo />
                </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full dark:bg-white bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full  dark:bg-white bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full  dark:bg-white bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/#contact">
                        Contact
                    </NavLink>
                    <NavLink to="/#portfolio">
                        Portfolio
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}