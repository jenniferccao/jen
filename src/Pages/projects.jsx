import React from 'react';

const ProjectItem = ({ name, description, tech, pic, link }) => {
    return (
        <div className='proj-item'>
            <div className='proj-item-left'>
                <h3>{name.toUpperCase()}</h3>
                <p>{description}</p>
                <div className='proj-techstack'>
                    {tech.map((techItem, index) => (
                        <span key={index} className='tech-item'>{techItem.toUpperCase()}</span>
                    ))}
                </div>
            </div>
            <a href={link} target='blank' className='proj-item-right'>
                {pic && <img src={pic} alt={`${name} project`} />}
            </a>
        </div>
    );
}

const Projects = () => {
    // array of project data
    const projectList = [
        { name: 'PreRide', description: 'An app that predicts relative difficulty of segments of a given bike route based on hill gradients and wind data of a given day.', tech: ['React', 'Typescript', 'MapBox', 'OpenMeteo'], pic: 'preride_cover.png', link: 'https://preride.vercel.app/' },
        { name: 'BingoBud', description: 'A web-based bingo card scanner and marker, helping people keep track of multiple cards and calls.', tech: ['React', 'TypeScript', 'Tesseract OCR'], pic: 'bingo_prev.png', link:'https://bingobud.vercel.app/' },
        { name: 'Chirpit', description: 'A Google Chrome extension for accessible learning by letting users interact with webpages through voice instead of just text. ', tech: ['Javascript', 'Chrome Extension APIs', 'Elevenlabs'], pic: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/150/243/datas/gallery.jpg', link: 'https://github.com/jenniferccao/Chirp' },
    ];

    return (
        <div className='projects-container'>
            <section className='projects-content-container' id="projects">
                <h2>PROJECTS</h2>
                {projectList.map((project, index) => (
                    <ProjectItem 
                        key={index} 
                        name={project.name} 
                        description={project.description} 
                        tech={project.tech} 
                        pic={project.pic}
                        link={project.link}
                    />
                ))}

                <a href='https://github.com/jenniferccao' target='blank' className='see-more'>See More →</a>
            </section>
        </div>
    );
}

export default Projects;
