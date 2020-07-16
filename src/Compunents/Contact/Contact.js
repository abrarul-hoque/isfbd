import React, { useDebugValue } from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <div className="contact">
            <div className="inner-box">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contactForm">
                            <h1 className="form-title">Contact us</h1>
                            <form className="form">
                                <div className="form-group">
                                    <input name="name" type="text" className="form-control" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <input name="Email" type="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <input name="phone" type="number" className="form-control" placeholder="Phone" required />
                                </div>
                                <div className="form-group">
                                    <textarea name="comments" placeholder="Address" className="form-control" cols="30" rows="4" placeholder="Comments" required></textarea>
                                </div>

                                <div className="form-group">
                                    <button className="btn submitBtn btn-block" type="submit">Submit</button>
                                </div>
                                <p className="form-address">15770 N. Dallas Parkway, Suite 550</p>
                                <p className="form-address">Dallas TX 75248</p>
                                <p className="form-phone">972-267-8188 ext. 168</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;