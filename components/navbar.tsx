'use client'
import { useState } from "react";
import { rock_salt } from "@/app/font";
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`fixed top-0 w-full flex justify-between text-light-blue items-center z-20 py-2 font-bold bg-dark-blue px-12`}>
            <div className={`${rock_salt.className} text-2xl`}>daviD</div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    {menuOpen ? (
                        <svg className="w-8 h-8 top-0.5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 top-0.5 relative " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </div>
            <ul className={`flex-col md:flex md:flex-row px-8 md:gap-4 absolute md:static top-12 left-0 w-full md:w-auto bg-dark-blue md:bg-transparent ${menuOpen ? 'block' : 'hidden'}`}>
                <li className="p-4 md:p-0">
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-100}  // Adjust this value as needed
                        className="cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                </li>
                <li className="p-4 md:p-0">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-100}  // Adjust this value as needed
                        className="cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </Link>
                </li>
                <li className="p-4 md:p-0">
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={2000}  // Adjust this value as needed
                        className="cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </li>
                <li className="p-4 md:p-0">
                    Resume
                </li>
            </ul>
        </nav>
    );
}
