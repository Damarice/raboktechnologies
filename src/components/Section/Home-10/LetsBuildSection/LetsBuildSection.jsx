
const LetsBuildSection = () => {
    return (
        <div className="tekup-portfolio-section bg-light1 tekup-section-padding-top">
            <div className="container">
                <div className="tekup-section-title center light-color">
                    <h2>Ready to see what your data is really worth?</h2>
                    <p>Tell us about your business and we will show you exactly where the opportunities are hiding. No jargon, no pressure — just a straight conversation about your data.</p>
                </div>
                <div className="tekup-map-form-wrap bg-white">
                    <div className="row">
                        <div className="col-lg-7 d-flex align-items-center">
                            <div className="tekup-main-form border-0">
                                <h3>Book a Free Strategy Call</h3>
                                <p>One of our senior BI consultants will review your current setup and identify quick wins — completely free, with no obligation to continue.</p>
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
                                                <textarea name="textarea" placeholder="What data challenges are you facing? (e.g. no visibility into sales, too many spreadsheets, slow reporting...)"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button id="tekup-main-form-btn" type="button">Book My Free Strategy Call <i className="ri-arrow-right-up-line"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="tekup-map-one">
                                <div id="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853743783!2d36.68258474999999!3d-1.3028617999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                                        width="100%" height="100%" allowFullScreen loading="lazy">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsBuildSection;
