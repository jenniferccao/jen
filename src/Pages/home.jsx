import React, { useEffect, useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import { BiChevronDown } from "react-icons/bi";

const Home = () => {
    // for responsive react
    const [isMobile, setIsMobile] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const updateScreenSize = () => {
        setIsMobile(window.innerWidth <= 768); 
    };

    useEffect(() => {
        updateScreenSize(); //check initial screen size
        window.addEventListener('resize', updateScreenSize); // listen for window resize events

        return () => window.removeEventListener('resize', updateScreenSize);
    }, []);

    // parallax
    useEffect(() => {
        if (isMobile) return; 

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    return (
        <div className='main-container'>
            <section className='bg-container' id="home">
                <div className="circle-1"></div>
                <div className="circle-2"></div>

                <div 
                    className='dawg'
                    style={{ 
                        transform: `translateY(${scrollY * 0.4}px) scaleX(-1) scale(0.5)` 
                    }}
                >
                    <img src='da20.png' alt="DA20" />
                </div>

                <div 
                    className='dawg2'
                    style={{ 
                        transform: `translateY(${scrollY * 0.2}px) scale(0.4)` 
                    }}
                >
                    <img src='c172.png' alt="C172" />
                </div>
                
                <div className='banner-container'>
                    <div className='title-container'>
                        <div className='name-title'>JENNIFER CAO</div>
                        
                        <div className='name-subtitle'>
                            {isMobile ? (
                                <span>CYXU & CYYZ</span> // mobile text
                            ) : (
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Space Mono, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
                                        fontWeight: 600,
                                        fontSize: '25pt',
                                    }}
                                    startDelay={0}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                        'CYYZ & CYXU',
                                        'Software Developer'.toUpperCase(),
                                        'Private Pilot'.toUpperCase(),
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
            </section>
        </div>
    );
}

export default Home;
