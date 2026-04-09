import Link from "next/link";

const AboutSection = () => {
    return (
        <div className="section tekup-section-padding">
            <div className="container">
                <div className="row" style={{alignItems:"stretch"}}>
                    <div className="col-xl-6 col-lg-6" style={{display:"flex"}}>
                        <div style={{borderRadius:"16px", overflow:"hidden", width:"100%", minHeight:"300px"}}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                alt="Rabok Technologies team"
                                style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
                            />
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content">
                            <h2>We exist to make data work for African businesses</h2>
                            <p>Rabok Technologies was founded on a simple belief: that every business — regardless of size — deserves access to the kind of data intelligence that drives real growth. We are a Nairobi-based Business Intelligence and Data Analytics consultancy serving clients across Kenya and the wider African market.</p>
                            <p>Our team combines deep technical expertise with genuine business understanding. We do not just build dashboards — we help you ask better questions, find better answers, and make better decisions.</p>
                            <div className="tekup-icon-list">
                                <ul>
                                    <li><i className="ri-check-line"></i>BI & Analytics specialists with cross-industry experience</li>
                                    <li><i className="ri-check-line"></i>Solutions tailored to the African business context</li>
                                    <li><i className="ri-check-line"></i>Committed to measurable outcomes, not just deliverables</li>
                                </ul>
                            </div>
                            <div className="tekup-extra-mt">
                                <Link className="tekup-default-btn" href="contact-us">Work With Us <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
