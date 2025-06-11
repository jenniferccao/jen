import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import { LuMenu } from "react-icons/lu";

function HamburgerMenu({ activeLink, setActiveLink }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (section) => {
        setActiveLink(section);
        setIsOpen(false); // close menu after click
    };

    return (
        <div className="menu-container">
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <LuMenu />
            </div>
            <nav className={`menu ${isOpen ? "show" : ""}`}>
                <a href="#home" 
                    className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                    onClick={() => setActiveLink('home')}
                >Home</a>
                <a href="#about"
                    className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                    onClick={() => setActiveLink('about')}
                >About</a>
                <a href="#projects"
                    className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
                    onClick={() => setActiveLink('projects')}
                >Projects</a>
                <a href="#design"
                    className={`nav-link ${activeLink === 'design' ? 'active' : ''}`}
                    onClick={() => setActiveLink('design')}
                >Design</a>
            </nav>
        </div>
    );
}

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    // observer to set active link based on scroll position
    useEffect(() => {
        const sections = document.querySelectorAll("section"); // Each section should have <section id="...">
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
                    <HamburgerMenu activeLink={activeLink} setActiveLink={setActiveLink} />
                ) : (
                    <>
                        <a
                            href="#home"
                            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                            onClick={() => setActiveLink('home')}
                        >
                            Home —
                        </a>
                        <a
                            href="#about"
                            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                            onClick={() => setActiveLink('about')}
                        >
                            About —
                        </a>
                        <a
                            href="#projects"
                            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
                            onClick={() => setActiveLink('projects')}
                        >
                            Projects —
                        </a>
                        <a
                            href="#design"
                            className={`nav-link ${activeLink === 'design' ? 'active' : ''}`}
                            onClick={() => setActiveLink('design')}
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
