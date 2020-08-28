import React from 'react';
import './Scholarship.css';
import ScholarshipTitle from '../ScholarshipTitle/ScholarshipTitle';
import singaporeScholarship from '../../resource/scholarship/scholarship1.jpg';

const Scholarship = () => {

    return (
        <div>
            {/* Scholarship Page Main Big Title */}
            <ScholarshipTitle></ScholarshipTitle>

            {/*Single Scholarship */}
            <div>
                {/*Single Scholarship Title */}
                <div>
                    <h1 className="scholarshipTopTitle">
                        Singapore International Graduate Award 2021 SINGA21 (Fully Funded)
                    </h1>
                </div>

                {/* Scholarship AdsImage. you have to just import image from "scholarship" folder with same name. and put import name to src attribute */}
                <img className="scholarship-image" src={singaporeScholarship} alt="" />


                {/* Write Scholarship Description into <p> text </p> Tag below */}
                <div className="scholarship-description">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, alias accusantium? Qui commodi quibusdam tempore nemo saepe, odio exercitationem corporis adipisci sunt nesciunt amet delectus, aliquam reiciendis iste alias necessitatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus laudantium eos itaque, adipisci ut aliquid odio hic harum laboriosam asperiores iure unde odit! Voluptate velit officia sint quasi facilis. 
                            
                        {/* Here "<br/>" tag is used for One line gapping from upper Paragraph. if you want to add 2 line gap between two paragraph, then you have to put <br/> twice in the bottom of the upper paragraph */}
                        <br/> <br/> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam sed perspiciatis laboriosam placeat ratione obcaecati illo quam quidem. Impedit hic natus tempora placeat assumenda error beatae soluta explicabo quidem!
                        <br/> <br/> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quisquam sed perspiciatis laboriosam placeat ratione obcaecati illo quam quidem. Impedit hic natus tempora placeat assumenda error beatae soluta explicabo quidem!
                        <br/> 
                        <br/> 
                    </p>

                    {/* Scholarships Info */}
                    <h5><strong>Country : </strong><span className="scholarship-countryName"> Singapore</span> </h5>

                    <h5> <strong> Financial Coverage : </strong> Fully Funded </h5>

                    <h5> <strong> Eligible Regions : </strong> Any international Student can apply. </h5>

                    <h5 className="scholarship-deadline">Deadline :  December 1, 2020 </h5>
                    
                
                
                    {/* Eligibility Criteria section*/}
                    <h1 className="scholarship-description-miniTitle">
                        Eligibility Criteria:
                    </h1>

                    <p>Here are some eligibility criteria for the program.</p>
                    <ul>
                        <li>Open for application to all international graduates with a passion for research and excellent academic results.</li>
                        <li>Good writtent and spoken English skills</li>
                        <li>Good reports from academic referees</li>
                        <li>The above eligibility criteria are not exhaustive</li>
                    </ul>
                    <p>A * STAR may include additional selection criteria based on current scholarship polities.</p>
                    <p>These policies may be changed from time to time without notice.</p>


                    {/* Benefits of this Scholarship */}
                    <h1 className="scholarship-description-miniTitle">Benefits:</h1>

                    <p>Here are some benefits for the program.</p>
                    <ul>
                        <li>Tution Fees</li>
                        <li>Monthly stipend of $2,000, which will increase upto $2,500 after the passing of the qualification Exam.</li>
                        <li>One-time payment allowance of S $1,000 *</li>
                        <li>Single air allowance up to S $1,500 *</li>

                    </ul>
                    <p>A * STAR may include additional selection criteria based on current scholarship polities.</p>
                    <p>These policies may be changed from time to time without notice.</p>
                    <br/>

                    {/* Application Procedure Section */}
                    <div className="application-process">
                        <h3 className="application-process-Title">
                            Application Process : 
                        </h3>
                        <p>
                            Please click the "Apply now" button to apply for the program.
                        </p> <br/>

                        {/* Steps for Application Process */}
                        <strong>
                            Step-1 : Search Ph.D. Research projects
                        </strong>
                        <p>
                            First, you have to search Ph.D. Investigation project. Go to the research area and select the research project that interests you. 
                        </p> 

                        <br/>
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

                        <br/>
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
                        <br/>

                        <strong>
                            Optional : 
                        </strong>
                        <p>
                            GRE / IELTS / TOEFL / SAT I & II / GATE results. However, please note that the university may require you to submit satisfactory scores as part of the university admission requirement.
                        </p>
                    <div class="btn-div d-flex justify-content-between">
                        {/* Button for Apply Now */}
                            <button className="applyNowBtn">
                                <a
                                className="applyNowBtnLink"
                                href="https://app.a-star.edu.sg/sms/applicant/Login.aspx"
                                target="_blank"
                                >
                                    Apply Now
                                </a>
                            </button>

                        {/* Button for Visit Official Website */}
                            <button className="visit-Official-web-Btn">
                                <a
                                className="applyNowBtnLink"
                                href="https://app.a-star.edu.sg/"
                                target="_blank"
                                >
                                    Visit Official Website
                                </a>
                            </button>
                    </div>
                    </div>
                    
                </div>

            </div>
            

        </div>
    );
};

export default Scholarship;