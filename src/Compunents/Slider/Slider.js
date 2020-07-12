import React from 'react';
import { Carousel } from 'react-bootstrap';
import fStudent from '../../resource/slider/female-student.jpg'
import banner2 from '../../resource/slider/banner2.jpg'
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={fStudent}
                        alt="First slide"
                    />
                    <div className="doverlay"></div>
                    <div className="carousel-text">
                        <h1>Less than 3% of the youth <br/> who age out of foster care <br/> graduate from college,<br/> <span className="italic-text">YOU</span> can help change that. </h1>
                        <button className="slider-btn">Donate</button>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;