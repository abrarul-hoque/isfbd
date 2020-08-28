import React from 'react';
import './WhoWeHelp.css';
import criteriaStudent from '../../resource/image/girl-smiling-2.jpg';

const WhoWeHelp = () => {
    return (
        <div>
            <div className="">
                <div className="row">
                    <div className="col-md-6 whoWeHelp">
                        <h1 className="whoWeHelp-title">Who We Help</h1>
                        <p className="whoWeHelp-para">International Student Foundation (ISF) is a private, charitable organization, which helps youth who have been orphaned or aged out of foster care pursue a college education. ISF provides scholarships, mentoring, and leadership development to students accepted into its program.</p>
                        <div className="criteria">
                            <h2 className="criteria-title">Criteria</h2>
                            <ul>
                                <li>Full time undergraduate or trade school students</li>
                                <li>Under the age of 24</li>
                                <li>Who have aged out or will age out of foster care.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 team-side-img">
                        <img className="cStudentImg" src={criteriaStudent} alt="" fluid/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeHelp;