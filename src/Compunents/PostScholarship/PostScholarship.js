import React from 'react';
import './PostScholarship.css';
import { useForm } from "react-hook-form";
import { useState } from 'react';


const PostScholarship = () => {
    const { register, handleSubmit, errors } = useForm();
    const [scholarship, setscholarship] = useState(null);
    


    const onSubmit = data => {
        //console.log(data);
        //scholarshipInfo(data);
        
        fetch('https://isfbd.herokuapp.com/addScholarship', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(scholarshipInfo => {
                setscholarship(scholarshipInfo.id)

            });
    };


    //console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="post-scholarship-block">
            <div className="post-scholarship-title-block">
                <h1>Post a Scholarship:</h1>
                <p>(Fill out following information to post a Scholarship Post on your website)</p>
            </div>

            {/* Scholarship Info: */}
            <div className="col-md-10 scholarshipform">

                <form className="scholarshipform" onSubmit={handleSubmit(onSubmit)}>

                    <h3 className="scholarshipInfoTitleName">Scholarship Name<span className="text-danger">*</span> :</h3>
                    <input
                        name="name"
                        ref={register({ required: true })}
                        placeholder="Scholarship Name"
                        className="form-control"
                    />
                    {
                        errors.name &&
                        <span className="error">
                            Scholarship Name is required
                        </span>
                    }


                    <h3 className="scholarshipInfoTitleName">University Image<span className="text-danger">*</span> :</h3>
                    <input
                        name="uniImage"
                        ref={register({ required: true })}
                        placeholder="https//:image_url"
                        className="form-control"
                    />
                    {
                        errors.uniImage &&
                        <span className="error">
                            Image URL is required
                        </span>
                    }


                    <h3 className="scholarshipInfoTitleName">Scholarship Description<span className="text-danger">*</span> :</h3>
                    <textarea
                        name="description"
                        ref={register({ required: true })}
                        placeholder="Scholarship Description"
                        className="form-control"
                    ></textarea>
                    {
                        errors.description &&
                        <span className="error">
                            Scholarship Description is required
                        </span>
                    }


                    <h3 className="scholarshipInfoTitleName">Scholarship Description 02:</h3>
                    <textarea
                        name="descriptionTwo"
                        ref={register({ required: false })}
                        placeholder="Scholarship Description (Paragraph 02)"
                        className="form-control"
                    ></textarea>




                    <h3 className="scholarshipInfoTitleName">Country Name<span className="text-danger">*</span> :</h3>
                    <input
                        name="country"
                        ref={register({ required: true })}
                        placeholder="Country Name"
                        className="form-control"
                    />
                    {
                        errors.country &&
                        <span className="error">
                            Country name is required
                        </span>
                    }

                    <h3 className="scholarshipInfoTitleName">Financial Coverage<span className="text-danger">*</span> :</h3>
                    <input
                        name="fcoverage"
                        ref={register({ required: true })}
                        placeholder="Financial Coverage"
                        className="form-control"
                    />
                    {
                        errors.fcoverage &&
                        <span className="error">
                            Financial Coverage is required
                        </span>
                    }



                    <h3 className="scholarshipInfoTitleName">Eligible Regions<span className="text-danger">*</span> :</h3>
                    <input
                        name="eRegion"
                        ref={register({ required: true })}
                        placeholder="Eligible Regions"
                        className="form-control"
                    />
                    {
                        errors.eRegion &&
                        <span className="error">
                            Eligible Regions is required
                        </span>
                    }



                    <h3 className="scholarshipInfoTitleName">Deadline<span className="text-danger">*</span> :</h3>
                    <input
                        name="deadline"
                        ref={register({ required: true })}
                        placeholder="Deadline"
                        className="form-control"
                    />
                    {
                        errors.deadline &&
                        <span className="error">
                            Deadline is required
                        </span>
                    }

                    <br/><br/>

                    <h3 className="scholarshipInfoTitleName">Eligibility Criteria<span className="text-danger">*</span> :</h3>
                    <textarea
                        name="eCriteria"
                        ref={register({ required: true })}
                        placeholder="Eligibility Criteria"
                        className="form-control"

                    ></textarea>
                    {
                        errors.eCriteria &&
                        <span className="error">
                            Eligibility Criteria is required
                        </span>
                    }

                    <h3 className="scholarshipInfoTitleName">Eligibility Criteria (List item 1):</h3>
                    <input
                        name="criteriaOne"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 1)"
                        className="form-control"
                    />

                    <h3 className="scholarshipInfoTitleName">Eligibility Criteria (List item 2):</h3>
                    <input
                        name="criteriaTwo"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 2)"
                        className="form-control"
                    />

                    <h3 className="scholarshipInfoTitleName">Eligibility Criteria (List item 3):</h3>
                    <input
                        name="criteriaThree"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 3)"
                        className="form-control"
                    />

                    <h3 className="scholarshipInfoTitleName">Eligibility Criteria (List item 4):</h3>
                    <input
                        name="criteriaFour"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 4)"
                        className="form-control"
                    />

                    <h3 className="scholarshipInfoTitleName">Eligibility Criteria (List item 5):</h3>
                    <input
                        name="criteriaFive"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 5)"
                        className="form-control"
                    />
                    <br/><br/>


                    <h3 className="scholarshipInfoTitleName">Benefits<span className="text-danger">*</span> :</h3>
                    <textarea
                        name="benefits"
                        ref={register({ required: true })}
                        placeholder="Benefits"
                        className="form-control"

                    ></textarea>
                    {
                        errors.benefits &&
                        <span className="error">
                            Benefits is required
                        </span>
                    }
                    
                    
                    <h3 className="scholarshipInfoTitleName">Benefits (List item 1):</h3>
                    <input
                        name="benefitsOne"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 1)"
                        className="form-control"
                    />
                    <h3 className="scholarshipInfoTitleName">Benefits (List item 2):</h3>
                    <input
                        name="benefitsTwo"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 2)"
                        className="form-control"
                    />
                    <h3 className="scholarshipInfoTitleName">Benefits (List item 3):</h3>
                    <input
                        name="benefitsThree"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 3)"
                        className="form-control"
                    />
                    <h3 className="scholarshipInfoTitleName">Benefits (List item 4):</h3>
                    <input
                        name="benefitsFour"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 4)"
                        className="form-control"
                    />
                    <h3 className="scholarshipInfoTitleName">Benefits (List item 5):</h3>
                    <input
                        name="benefitsFive"
                        ref={register({ required: false })}
                        placeholder="Eligibility Criteria (List item 5)"
                        className="form-control"
                    />
                    
                    
                    <br/><br/>
                    <h3 className="scholarshipInfoTitleName">Apply Link<span className="text-danger">*</span> :</h3>
                    <input
                        name="applyLink"
                        ref={register({ required: true })}
                        placeholder="Apply Link"
                        className="form-control"

                    />
                    {
                        errors.applyLink &&
                        <span className="error">
                            Apply Link is required
                        </span>
                    }


                    <h3 className="scholarshipInfoTitleName">Official Website<span className="text-danger">*</span> :</h3>
                    <input
                        name="oWebsite"
                        ref={register({ required: true })}
                        placeholder="Official Website Link (If there is no link, continue with the # sign)"
                        className="form-control"

                    />
                    {
                        errors.oWebsite &&
                        <span className="error">
                            Official Website Link is required
                        </span>
                    }


                    <br />
                    <input className="btn scholarshipSubmitBtn" type="submit" />

                </form>

            </div>
        </div>
    );
};

export default PostScholarship;