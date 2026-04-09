"use client"

import Link from "next/link";

const ContactSection = () => {
    return (
        <div className="section tekup-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content">
                            <h2>Let's talk about your data challenges</h2>
                            <p>Whether you are drowning in spreadsheets, struggling to get a clear view of your business, or ready to build a full BI strategy — we are here to help. Reach out and let's start the conversation.</p>
                            <div className="tekup-contact-info-wrap wrap2">
                                <div className="tekup-contact-info mb-0">
                                    <i className="ri-map-pin-2-fill"></i>
                                    <h5>Address</h5>
                                    <p>Nairobi, Kenya</p>
                                </div>
                                <div className="tekup-contact-info mb-0">
                                    <i className="ri-mail-fill"></i>
                                    <h5>Contact</h5>
                                    <Link href="mailto:info@raboktechnologies.co.ke">info@raboktechnologies.co.ke</Link>
                                    <Link href="tel:+254716205797">+254 716 205 797</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6">
                        <div className="tekup-main-form">
                            <h3>Book a Free Strategy Call</h3>
                            <p>One of our senior BI consultants will review your setup and identify quick wins — no obligation.</p>
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tekup-main-field">
                                            <input type="text" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tekup-main-field">
                                            <input type="number" placeholder="Phone number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tekup-main-field">
                                            <input type="email" placeholder="Work email address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tekup-main-field">
                                            <textarea name="textarea" placeholder="What data challenges are you facing?"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button id="tekup-main-form-btn" type="button">Send Message <i className="ri-arrow-right-up-line"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
