import Link from "next/link";

const ItSolutionSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding">
            <div className="container">
                <div className="row" style={{alignItems: "stretch"}}>
                    <div className="col-xl-6 col-lg-6" style={{display:"flex"}}>
                        <div style={{borderRadius: "16px", overflow: "hidden", width:"100%", minHeight:"320px"}}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                alt="Business Intelligence dashboards and data analytics"
                                style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}}
                            />
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6" style={{display:"flex", alignItems:"center"}}>
                        <div className="tekup-default-content">
                            <h2>Your data is already telling a story. We help you hear it.</h2>
                            <p>Too many businesses make critical decisions based on gut feel, outdated spreadsheets, or incomplete reports. Rabok Technologies gives you a single source of truth — live, accurate, and built around the questions that matter most to your business.</p>
                            <div className="tekup-icon-list">
                                <ul>
                                    <li><i className="ri-check-line"></i>Real-time dashboards your whole team can use — no data degree required</li>
                                    <li><i className="ri-check-line"></i>Identify revenue leaks and cost inefficiencies hiding in your data</li>
                                    <li><i className="ri-check-line"></i>A strategy built around your goals, not a generic template</li>
                                </ul>
                            </div>
                            <div className="tekup-extra-mt">
                                <Link className="tekup-default-btn" href="/about-us">See How We Work <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItSolutionSection;
