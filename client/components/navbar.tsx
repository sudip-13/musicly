"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from '@mui/icons-material/Home';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ArticleIcon from '@mui/icons-material/Article';
import logo from "@/public/logo.jpeg"
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HamburerMenu from "./hamburgermenu";

const Navbar: React.FC = () => {

    const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);

    return (
        <>
            <nav className="flex fixed w-full py-5 justify-between pl-3 pr-3 md:pl-0 md:pr-0  md:justify-around top-0 bg-inherit z-30 font-Montserrat text-white text-lg items-center">
                <ol className="flex items-center space-x-3 cursor-pointer">
                    <Image className="h-8 w-8 rounded-full" src={logo} alt={"logo"} ></Image>
                    <span className="font-bold">MUSICALLY</span>
                </ol>
                <ol className="hidden md:flex md:flex-row md:gap-16 md:py-5">
                    <Link href={"/"}>
                        <li className="items-center flex gap-1 cursor-pointer hover:text-blue-600 duration-300 ease-in-out transition-all ">
                            <HomeIcon className="h-5 w-5" />
                            <p>Home</p>
                        </li>
                    </Link>
                    <Link href={"/music"}>
                        <li className="items-center flex gap-1 cursor-pointer hover:text-blue-600 duration-300 ease-in-out transition-all">
                            <MusicNoteIcon className="h-5 w-5" />
                            <p>Music</p>
                        </li>
                    </Link>
                    <Link href={"/news"}>
                        <li className="items-center flex gap-1 cursor-pointer hover:text-blue-600 duration-300 ease-in-out transition-all">
                            <ArticleIcon className="h-5 w-5" />
                            <p>News</p>
                        </li>
                    </Link>
                </ol>
                <ol className="hidden md:flex">
                    <Button className="space-x-2" variant="outlined">
                        <LoginIcon className="h-5 w-5" />
                        <span>Login</span>
                    </Button>
                </ol>
                <ol className="md:hidden">
                    {showHamburgerMenu ? (
                        <button onClick={() => setShowHamburgerMenu(false)}>
                            <CloseIcon className="h-6 w-6" />
                        </button>
                    ) : (
                        <button onClick={() => setShowHamburgerMenu(true)}>
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    )}
                </ol>
                {showHamburgerMenu && <HamburerMenu isOpen={showHamburgerMenu} />}
            </nav>
        </>
    )
}

export default Navbar;
