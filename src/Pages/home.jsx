import React, { useEffect, useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import { BiChevronDown } from "react-icons/bi";

const Home = () => {

    // for responsive react
    const [isMobile, setIsMobile] = useState(false);

    const updateScreenSize = () => {
        setIsMobile(window.innerWidth <= 768); // Set to true if screen width is <= 768px (tablet/mobile)
    };

    useEffect(() => {
        updateScreenSize(); //check initial screen size
        window.addEventListener('resize', updateScreenSize); // listen for window resize events

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    // parallax
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const dawg = document.querySelector('.dawg');
        const dawg2 = document.querySelector('.dawg2');

        if (dawg) dawg.style.transform = `translateY(${scrollPosition * -0.4}px)`;
        if (dawg2) dawg2.style.transform = `translateY(${scrollPosition * -0.2}px)`;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div className='main-container'>
            <div className='bg-container' id ="home">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                {!isMobile && (
                    <>
                    <div className='dawg'>
                        <img src='dawg.png' alt="Background element" />
                    </div>

                    <div className='dawg2'>
                        <img src='dawg.png' alt="Background element" />
                    </div>
                    </>
                )}
                

                <div className='banner-container'>
                    <div className='title-container'>
                        <div className='name-title'>JENNIFER CAO</div>
                        
                        <div className='name-subtitle'>
                            {isMobile ? (
                                <span>CYXU & CYYZ 🛫</span> // mobile text
                            ) : (
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Monaco',
                                        fontWeight: 600,
                                        fontSize: '25pt',
                                    }}
                                    startDelay={0}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                        'CYYZ & CYXU 🛫',
                                        'Front-end Developer'.toUpperCase(),
                                        'Graphic Designer'.toUpperCase(),
                                        'Ivey HBA \'26'.toUpperCase(),
                                    ]}
                                    multiTextDelay={2000}
                                    multiTextLoop={true}
                                    typeSpeed={100}
                                />
                            )}
                        </div>

                    </div>

                    <a className='down-button' href='#about'><BiChevronDown /></a>
                </div>
            </div>
        </div>
    );
}

export default Home;
