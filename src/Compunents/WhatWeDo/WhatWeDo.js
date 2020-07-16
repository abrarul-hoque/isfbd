import React from 'react';
import wWeDoImg from '../../resource/image/male-student-smiling.jpg';
import './WhatWeDo.css';

const WhatWeDo = () => {
    return (
        <div>
            <div className="row">
            <div className="col-md-6 w-100">
                    <img className="cStudentImg" src={wWeDoImg} alt="" />
                </div>

                <div className="col-md-6 whoWeHelp">
                    <h1 className="whoWeHelp-title">WHAT WE DO</h1>
                    <div className="service">
                        <h2 className="scholarship-title">Scholarships</h2>
                        <p>ISF funding can go towards any expense necessary for you to remain a full time student.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;