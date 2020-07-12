import React from 'react';
import './Mission.css';
import studentPinkColor from '../../resource/image/student-pink.png';
import manOnComputer from '../../resource/image/man-on-computer.png';

const Mission = () => {
    return (
        <div>
            <div className="mission-section">
                <h1 className="mission-title"> ISFBD Mission Statement</h1>
                <p className="mission-para">International Student Foundation(ISF) is a private charitable organization, which helps youth who have <br /> been orphaned or aged out of foster care pursue a college education. ISF provides scholarships, <br /> mentoring, and leadership development to students accepted into its program</p>
            </div>

            <div className="row">
                <div className="col-md-6 mission-img-section">
                    <img className="missionPic" src={studentPinkColor} alt="" />
                    <div className="mission-left-text">
                        <h1>Are You a <br /><span className="studentText">Student?</span></h1>
                        <button className="lernMoreBtn">Learn More</button>
                    </div>
                </div>
                <div className="col-md-6 mission-img-section">
                    <img className="missionPic" src={manOnComputer} alt="" />
                    <div className="mission-right-text">
                        <h1>Looking to <br /><span className="helpText">Help?</span></h1>
                        <button className="lernMoreBtn">Get Involved</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;