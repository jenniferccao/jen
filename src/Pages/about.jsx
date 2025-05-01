import React from 'react';

const About = () => {
    return(
        <div className='about-container'>
            <div className='about-content-container' id="about">
                <div className='intro-container'>
                    <h1>Hi 👋 I’m Jen</h1>
                    <p>
                        I’m a <b>software developer</b> with a background in design, currently pursuing my <b>HBA</b> at <b>Ivey Business School</b> and a dual degree in <b>Computer Science</b> at <b>Western University</b>.
                    </p>
                    <p>
                        As a licensed pilot, I’m always ready to navigate new challenges, both in the air and on the ground.
                    </p>
                    <p>
                        I’m passionate about turning complex problems into creative and practical solutions. My experience spans design, development, and strategy, enabling me to approach technical challenges with a well-rounded perspective. Whether it's building intuitive user interfaces or contributing to broader strategic initiatives, <b>I enjoy making ideas take flight.</b>
                    </p>
                </div>
                
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

            </div>
        </div>
    );
}

export default About;
