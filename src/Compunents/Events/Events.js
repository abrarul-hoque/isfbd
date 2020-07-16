import React from 'react';
import './Events.css';
import eventImg from '../../resource/image/ISF-Graduation-Graphic-2.png';
import Home from '../Home/Home';

const Events = () => {
    return (
        <div className="event">
            <h1 className="">upcoming events</h1>
            <div className="eventBox">
                <img className="eventImage" src={eventImg} alt=""/>
                <a className="registerBtn" href="https://www.linkedin.com/in/abrarul-hoque/" target="_blank">Register Here! </a>
            </div>
        </div>
    );
};

export default Events;