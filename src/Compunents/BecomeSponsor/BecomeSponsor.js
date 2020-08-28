import React from 'react';
import './BecomeSponsor.css';
import spnsrLogo1 from '../../resource/logo/Carrington-Group-Logo.png';
import spnsrLogo2 from '../../resource/logo/Crest.png';
import spnsrLogo3 from '../../resource/logo/masergy-cybersecurity.png';

const BecomeSponsor = () => {
    return (
        <div className="become-sponsor-block">
             <div className="sponsor-title">
                <h1>
                BECOME A SPONSOR
                </h1>
            </div>
           <div className="container">
           <div className="row sponsor-logo-block align-items-center">
                <div className="col-md-4 sponsor-logo-div" >
                    <img className="w-100" src={spnsrLogo3} alt=""/>
                </div>
                <div className="col-md-4 sponsor-logo-div">
                    <img className="w-100" src={spnsrLogo1} alt=""/>
                </div>
                <div className="col-md-4 sponsor-logo-div">
                    <img className="w-100" src={spnsrLogo2} alt=""/>
                </div>
            </div>
            
           </div>
        </div>
    );
};

export default BecomeSponsor;