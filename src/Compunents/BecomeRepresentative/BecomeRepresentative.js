import React from 'react';
import './BecomeRepresentative.css';
import Representativeimg1 from '../../resource/image/team1.jpg';

const BecomeRepresentative = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 repImg">
                    <img className="w-100" src={Representativeimg1} alt="" />
                </div>
                <div className="col-md-4 col-sm-12 representative-intro">
                    <h1 className="representative-intro-title">
                        Become a Representative
                    </h1>
                    <p>
                        The ISF leadership Representative program is focused on building a trusting relationship between a seasoned leader and a young leader. Although the emphasis of the program is on developing both the leadership qualities and potential of young college-aged adults, it also encompasses character, values and spiritual development.  The program involves four (4) phases of the relationship: Establish, Engage, Sustain and Transition.
                    </p>
                    <button className="applyRepresentativeBtn" href="#">Apply to be a Representative</button>
                </div>

            </div>
        </div>
    );
};

export default BecomeRepresentative;