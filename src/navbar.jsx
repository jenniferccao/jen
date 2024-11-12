import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import { LuMenu } from "react-icons/lu";

function HamburgerMenu({ activeLink }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <div className="hamburger" onClick={toggleMenu}>
                <LuMenu />
            </div>
            <nav className={`menu ${isOpen ? "show" : ""}`}>
                <a href="#home" 
                    className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}>Home</a>
                <a href="#about"
                    className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}>About</a>
                <a href="#projects"
                    className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}>Projects</a>
                <a href="#design"
                    className={`nav-link ${activeLink === 'design' ? 'active' : ''}`}>Design</a>
            </nav>
        </div>
    );
}

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    // Observer to set active link based on scroll position
    useEffect(() => {
        const sections = document.querySelectorAll("section"); // Assuming each section has <section> tag with an id
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6
        };

        let isMounted = true;

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && isMounted) {
                    setActiveLink(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        return () => {
            isMounted = false;
            observer.disconnect();
        };
    }, []);

    // responsive react
    const updateScreenSize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    return (
        <div className='nav-bar'>
            <a className='nav-logo-box' href="#home">
                <img className='nav-logo' src={logo} alt="Logo" />
            </a>

            <div className='nav-bar-center'>
                {isMobile ? (
                    <HamburgerMenu activeLink={activeLink} />
                ) : (
                    <>
                        <a
                            href="#about"
                            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                        >
                            About —
                        </a>
                        <a
                            href="#projects"
                            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
                        >
                            Projects —
                        </a>
                        <a
                            href="#design"
                            className={`nav-link ${activeLink === 'design' ? 'active' : ''}`}
                        >
                            Design —
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}

export default NavBar;
