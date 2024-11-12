import React from 'react';

import { AiFillLinkedin, AiFillGithub, AiFillDribbbleSquare,  } from "react-icons/ai";


const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-bar'>
                <a href='https://www.linkedin.com/in/jenniferrcao' target='_blank'><AiFillLinkedin /></a>
                <a href='https://github.com/jenniferccao' target='blank'><AiFillGithub /></a>
                <a href='https://dribbble.com/jencao' target='blank'><AiFillDribbbleSquare /></a>
            </div>
        </div>
    );
}

export default Contact;