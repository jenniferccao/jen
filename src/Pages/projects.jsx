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
        { name: 'PreRide', description: 'An app that predicts relative difficulty of segments of a given bike route based on hill gradients and wind data of a given day.', tech: ['React', 'Typescript', 'MapBox', 'OpenMeteo'], pic: 'https://private-user-images.githubusercontent.com/92490111/552470172-94704157-7bc1-491e-83a4-92a01a2af1b6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzE1NTk3ODMsIm5iZiI6MTc3MTU1OTQ4MywicGF0aCI6Ii85MjQ5MDExMS81NTI0NzAxNzItOTQ3MDQxNTctN2JjMS00OTFlLTgzYTQtOTJhMDFhMmFmMWI2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAyMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMjIwVDAzNTEyM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdiMGQzYjZmZDU3ZGRkYTIwNDUzYjE5MGIxNTBmYzM2ZWIwYzkzODU3MTlkZmZkZThkNzdiZjljNzg3MDY4NmEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.iMuCVkzxeH9oz-dkEaqPFOxGJriyEzEIcbpls7L4eYs', link: 'https://preride.vercel.app/' },
        { name: 'Chirpit', description: 'A Google Chrome extension for accessible learning by letting users interact with webpages through voice instead of just text. ', tech: ['Javascript', 'Chrome Extension APIs', 'Elevenlabs'], pic: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/150/243/datas/gallery.jpg', link: 'https://github.com/jenniferccao/Chirp' },
        { name: 'Pipstop', description: 'PipStop is a platform designed to boost hackathon participants\'s well-being and social engagement by presenting randomized health, social, and fun challenges, helping them stay energized and connected throughout the event', tech: ['HTML', 'CSS', 'Node.js', 'SQL Lite', 'infobip API'], pic: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/683/754/datas/medium.png', link:'https://devpost.com/software/pipstop' },
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
