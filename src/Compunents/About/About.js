import React from 'react';
import AboutusTitle from '../AboutusTitle/AboutusTitle';
import AboutDescription from '../AboutDescription/AboutDescription';
import ISFStaff from '../ISFStaff/ISFStaff';
import BoardStaff from '../BoardStaff/BoardStaff';
import Contact from '../Contact/Contact';

const About = () => {
    return (
        <div>
            <AboutusTitle></AboutusTitle>
            <AboutDescription></AboutDescription>
            <ISFStaff></ISFStaff>
            <BoardStaff></BoardStaff>
            <Contact></Contact>
        </div>
    );
};

export default About;