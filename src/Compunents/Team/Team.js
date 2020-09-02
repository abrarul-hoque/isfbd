import React from 'react';
import WhoWeHelp from '../WhoWeHelp/WhoWeHelp';
import TeamTitle from '../TeamTitle/TeamTitle';
import TeamMember from '../TeamMember/TeamMember';

const Team  = () => {
    return (
        <div>
            <TeamTitle></TeamTitle>
            <WhoWeHelp></WhoWeHelp>
            <TeamMember></TeamMember>
        </div>
    );
};

export default Team;