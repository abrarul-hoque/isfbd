import React from 'react';
import './ISFStaff.css';
import manImg from '../../resource/image/man-staff.png';
import womenImg from '../../resource/image/women-staff.jpg';
import './animate.css';

const ISFStaff = () => {
    return (
        <div className="staff-section">
            <h1 className="staff-title">ISF Staff</h1>

            <div className="row">
                <div className="col-md-6 col-sm-12 wow bounceInLeft">
                    <img className="staffImg" src={manImg} alt="" />
                    <h2 className="staffName">Dr. Blair Ritchey</h2>
                    <h2 className="staffTitle">Executive Director</h2>
                </div>

                <div className="col-md-6 col-sm-12 wow bounceInRight">
                    <img className="staffImg" src={womenImg} alt="" />
                    <h2 className="staffName">GINA FAWCETT</h2>
                    <h2 className="staffTitle">OPERATIONS DIRECTOR</h2>
                </div>
            </div>
        </div>
    );
};

export default ISFStaff;