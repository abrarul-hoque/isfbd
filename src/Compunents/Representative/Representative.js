import React from 'react';
import'./Representative.css';
import RepresentativeTitle from '../RepresentativeTitle/RepresentativeTitle';
import RepresentativeIntro from '../RepresentativeIntro/RepresentativeIntro';
import BecomeRepresentative from '../BecomeRepresentative/BecomeRepresentative';
import BecomeSponsor from '../BecomeSponsor/BecomeSponsor';
import Representatives from '../Representatives/Representatives';

const Representative = () => {
    return (
        <div>
            <RepresentativeTitle></RepresentativeTitle>
            <RepresentativeIntro></RepresentativeIntro>
            <BecomeRepresentative></BecomeRepresentative>
            <Representatives></Representatives>
            <BecomeSponsor></BecomeSponsor>
        </div>
    );
};

export default Representative;