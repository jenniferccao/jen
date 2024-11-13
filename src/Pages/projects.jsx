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
        { name: 'TerraTalk', description: 'A map-based app that uses OpenAI natural language processing to transform user queries such as "bathrooms in restaurants near me"s into map searches, providing fast and personalized georeferenced information.', tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'], pic: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/770/450/datas/gallery.jpg', link: 'https://devpost.com/software/terratalk' },
        { name: 'SANDWCH', description: 'A Supplementary app prototype designed as part of a feasability study on a pod created to mitigate food waste.', tech: ['Figma', 'Case Study'], pic: 'https://i.ibb.co/qBpPtGn/Concept.png', link: 'https://www.figma.com/proto/blmM03Db9Vnbr5bMvKO9mO/Sandwhich-Design-Elements?node-id=37-1146&node-type=canvas&t=EvYbpv8oK0mXA25N-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A1035&show-proto-sidebar=1' },
        { name: 'Pipstop', description: 'PipStop is a platform designed to boost hackathon participants\'s well-being and social engagement by presenting randomized health, social, and fun challenges, helping them stay energized and connected throughout the event', tech: ['HTML', 'CSS', 'Node.js', 'SQL Lite', 'infobip API'], pic: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/683/754/datas/medium.png', link:'https://devpost.com/software/pipstop' },
    ];

    return (
        <div className='projects-container'>
            <div className='projects-content-container' id="projects">
                <h2>PROJECTS</h2>
                {/* Map over projectList to render each ProjectItem */}
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
            </div>
        </div>
    );
}

export default Projects;
