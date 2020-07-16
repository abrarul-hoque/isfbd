import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>2020 <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> Copyright International Student's Foundation Bangladesh</p>
            <p className="developer">Developed by : <a className="developerInfo" href="https://www.linkedin.com/in/abrarul-hoque/" target="_blank">Abrarul Hoque</a></p>
        </div>

    );
};

export default Footer;