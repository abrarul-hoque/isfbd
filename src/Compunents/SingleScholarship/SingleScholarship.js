import React from 'react';
import './SingleScholarship.css';

const SingleScholarship = (props) => {
    const { name, uniImage, description, descriptionTwo, country, fcoverage, eRegion, deadline, eCriteria, criteriaOne, criteriaTwo, criteriaThree, criteriaFour, criteriaFive, benefits, benefitsOne, benefitsTwo, benefitsThree, benefitsFour, benefitsFive, applyLink, oWebsite } = props.sngleScholarship;

    return (
        <div>
            <div>
                <h1 className="scholarshipTopTitle">{name}</h1>
                <div className="container">
                    <img className="scholarship-image" src={uniImage} alt="" />
                    <p className="scholarship-details">{description}</p> <br />
                    <p className="scholarship-details">{descriptionTwo}</p>

                    <div className="text-left scholarship-description">
                        <h5 ><strong>Country : </strong><span className="scholarship-countryName"> {country}</span> </h5>

                        <h5> <strong> Financial Coverage : </strong> {fcoverage} </h5>

                        <h5> <strong> Eligible Regions : </strong> {eRegion}. </h5>

                        <h5 className="scholarship-deadline">Deadline :  {deadline} </h5>


                        <h1 className="scholarship-description-miniTitle">
                            Eligibility Criteria:
                    </h1>
                        <p className="scholarship-details">{eCriteria}</p>
                        <ul className="scholarship-facility-list">
                            <li>{criteriaOne}</li>
                            <li>{criteriaTwo}</li>
                            <li>{criteriaThree}</li>
                            <li>{criteriaFour}</li>
                            <li>{criteriaFive}</li>
                        </ul>


                        <h1 className="scholarship-description-miniTitle">Benefits:</h1>
                        <p className="scholarship-details">{benefits}</p>
                        <ul className="scholarship-facility-list">
                            <li>{benefitsOne}</li>
                            <li>{benefitsTwo}</li>
                            <li>{benefitsThree}</li>
                            <li>{benefitsFour}</li>
                            <li>{benefitsFive}</li>
                        </ul>



                        <div className="applicatoin-process-block">
                            <h3 className="scholarship-description-miniTitle">
                                Application Process :
                            </h3>
                            <p>
                                Please click the "Apply now" button to apply for the program.
                            </p> <br />

                            {/* Steps for Application Process */}
                            <strong>
                                Step-1 : Search Ph.D. Research projects
                            </strong>
                            <p>
                                First, you have to search Ph.D. Investigation project. Go to the research area and select the research project that interests you.
                            </p>

                            <br />
                            <strong>
                                Step-2 : required documents
                            </strong>
                            <p>
                                Prepare all required documents in advance. You will need your documents ad the time of the request. Do not send hard copies of your documents to the SINGA Office. You must submit all documents online with your Singa application.
                            </p>
                            <ul>
                                <li>An identification card or passport</li>
                                <li>A recent passport-sized photo (in ".jpeg" or ".png" format)</li>
                            </ul>

                            <br />
                            <strong>
                                Step-3 : Transcripts and Reports
                            </strong>
                            <p>
                                All Transcripts must be in English translation.
                            </p>
                            <ul>
                                <li>Academic transcripts of bachelor and/or Masters</li>
                                <li>Bachelor's certificate/displacement(s) or a certification letter from the university in your application if your certificate/displacement has not yet been awarded.</li>
                                <li>2 recommendation reports (to be completed and submitted online the arbitrators)</li>
                            </ul>
                            <br />

                            <strong>
                                Optional :
                            </strong>
                            <p>
                                GRE / IELTS / TOEFL / SAT I & II / GATE results. However, please note that the university may require you to submit satisfactory scores as part of the university admission requirement.
                            </p>
                            <div className="btn-div d-flex justify-content-between">
                                {/* Button for Apply Now */}

                                <a
                                    className="applyNowBtnLink"
                                    href={applyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="applyNowBtn">
                                        Apply Now
                                </button>
                                </a>


                                {/* Button for Visit Official Website */}

                                <a
                                    className="applyNowBtnLink"
                                    href={oWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="visit-Official-web-Btn">
                                        Visit Official Website
                                </button>
                                </a>

                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div >
    );
};

export default SingleScholarship;