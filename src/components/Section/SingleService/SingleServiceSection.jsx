"use client"

import Link from "next/link";

const serviceMenu = [
    "Business Intelligence",
    "Data Analytics Consulting",
    "Data Strategy & Roadmap",
    "Dashboards & Reporting",
    "Data Warehousing & ETL",
    "Predictive Analytics",
    "Data Governance",
    "ETL & Integration",
];

const SingleServiceSection = () => {
    return (
        <div className="section tekup-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tekup-service-details-wrap">
                            <div style={{borderRadius:"16px", overflow:"hidden", marginBottom:"32px", lineHeight:0}}>
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80"
                                    alt="Business Intelligence consulting"
                                    style={{width:"100%", height:"300px", objectFit:"cover", display:"block"}}
                                />
                            </div>
                            <div className="tekup-service-details-item">
                                <h3>Business Intelligence Consulting</h3>
                                <p>Most businesses are collecting more data than ever — but very few are actually using it to make better decisions. That is the gap Rabok Technologies exists to close. Our Business Intelligence consulting service gives your organisation a clear, real-time view of what is happening across every part of your business, so your leadership team can stop guessing and start deciding with confidence.</p>
                                <p>We work with you to understand your business model, your key decisions, and the data you already have. Then we design and build a BI environment that surfaces exactly the insights you need — nothing more, nothing less.</p>
                            </div>
                            <div className="tekup-service-details-item">
                                <h3>What You Get</h3>
                                <p>Our BI engagements are end-to-end — from data assessment through to live dashboards and team training. Here is what is included:</p>
                                <div className="tekup-icon-list">
                                    <ul>
                                        <li><i className="ri-check-line"></i>Current state data audit and gap analysis</li>
                                        <li><i className="ri-check-line"></i>KPI definition and metrics framework</li>
                                        <li><i className="ri-check-line"></i>Custom dashboard and report design</li>
                                        <li><i className="ri-check-line"></i>Data pipeline and integration setup</li>
                                        <li><i className="ri-check-line"></i>Team training and adoption support</li>
                                        <li><i className="ri-check-line"></i>Ongoing optimisation and support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tekup-service-details-item">
                                <h3>Why It Matters</h3>
                                <p>The businesses that win in the next decade will be the ones that make faster, smarter decisions than their competitors. BI is not a luxury — it is the infrastructure of modern decision-making. Whether you are a growing SME or an established enterprise, having a clear view of your data is the single highest-leverage investment you can make in your business right now.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tekup-service-sidebar">
                            <div className="tekup-service-menu">
                                <ul>
                                    {serviceMenu.map((s, i) => (
                                        <li key={i}><Link href="single-service">{s} <i className="ri-arrow-right-up-line"></i></Link></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tekup-service-contact" style={{backgroundImage:"url(/images/service/bg.png)"}}>
                                <img src="/images/service/icon.png" alt="" />
                                <h3>Ready to unlock your data?</h3>
                                <p>Book a free strategy call with one of our senior BI consultants — no obligation.</p>
                                <Link className="tekup-default-btn tekup-white-btn" href="contact-us">Book Free Call <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceSection;
