import React from 'react';
import WhoWeHelp from '../WhoWeHelp/WhoWeHelp';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import TeamTitle from '../TeamTitle/TeamTitle';
import TeamMember from '../TeamMember/TeamMember';

const Team  = () => {
    return (
        <div>
            <TeamTitle></TeamTitle>
            <WhoWeHelp></WhoWeHelp>
            {/* <WhatWeDo></WhatWeDo> */}
            <TeamMember></TeamMember>
        </div>
    );
};

export default Team;