import React from 'react';
import './Scholarship.css';
import ScholarshipTitle from '../ScholarshipTitle/ScholarshipTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleScholarship from '../SingleScholarship/SingleScholarship';
import Loading from '../Loading/Loading';

const Scholarship = () => {

    const [scholarships, setScholarships] = useState([]);
    const [loadingVisibility, setLoadingVisibility] = useState("block");

    useEffect(() => {
        fetch('https://isfbd.herokuapp.com/scholarship')
            .then(res => res.json())
            .then(data => {
                setScholarships(data);
                setLoadingVisibility("none");
            })
    }, [])

    return (
        <div>
            {/* Scholarship Page Main Big Title */}
            <ScholarshipTitle></ScholarshipTitle>
            

            {/*Single Scholarship */}

            <div>
            <Loading visibility={loadingVisibility} />
                {
                    scholarships.map(sc =>
                        <SingleScholarship
                            sngleScholarship={sc}
                        >
                        </SingleScholarship>)
                }
            </div>

        </div>
    );
};

export default Scholarship;