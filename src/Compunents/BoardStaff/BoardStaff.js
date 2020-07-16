import React from 'react';
import './BoardStaff.css';
import groupPhoto from '../../resource/image/isf-board.jpg';

const BoardStaff = () => {
    return (
        <div className="bStaffSection">
            <h1 className="bStaffTitle">BOARD OF DIRECTORS</h1>
            <img src={groupPhoto} className="bStaffImg" alt=""/>
            <p className="bStaffCaption">Ben & Deanna Carroll, Katherine Clark, Keith & Debbie Finley, Jeff and Denise Hoyt, Bart McCullum, John & Christi Perfetto, John and Vicki Kelly, Ken and Cindy Mills, Jason and Ann Marie Smith, Tyler and Katie Talman, Lisa Turner VanValkenburgh</p>
        </div>
    );
};

export default BoardStaff;