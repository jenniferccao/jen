import React from 'react';
import Experience from './experience.jsx';

const About = () => {
    return(
        <div className='about-container'>
            <section className='about-content-container' id="about">
                <div className='intro-container'>
                    <h1>Hi 👋 I’m Jen</h1>
                    <p>
                        I’m a software developer with a background in design, currently pursuing my HBA at Ivey Business School and a dual degree in Computer Science at Western University.
                    </p>
                    <p>
                        As a licensed pilot, I’m always ready to navigate new challenges, both in the air and on the ground. <b>I enjoy making ideas take flight.</b>
                    </p>
                </div>

                <Experience/>
                
                <div className='skills-container'>
                    <h2>SKILLS</h2>

                    <div className='skills-cols'>
                        <div className='skills-languages'>
                            <h2>Languages</h2>
                                <p>JavaScript</p>
                                <p>TypeScript</p>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>Python</p>
                                <p>Java</p>
                                <p>C</p>
                                <p>SQL</p>
                                <p>R</p>
                        </div>
                        <div className='skills-framworks'>
                            <h2>Frameworks</h2>
                                <p>React.js</p>
                                <p>React Native</p>
                                <p>Node.js</p>
                                <p>Spring Boot</p>
                                <p>Flask</p>
                        </div>
                        <div className='skills-tools'>
                            <h2>Tools</h2>
                                <p>Git</p>
                                <p>Bash</p>
                                <p>MongoDB</p>
                                <p>Jira</p>
                                <p>Kanban</p>
                        </div>
                        <div className='skills-software'>
                            <h2>Software</h2>
                                <p>Excel</p>
                                <p>Powerpoint</p>
                                <p>Word</p>
                                <p>Photoshop</p>
                                <p>Illustrator</p>
                                <p>Figma</p>
                                <p>Affinity</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;
