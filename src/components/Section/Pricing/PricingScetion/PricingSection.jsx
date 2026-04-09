"use client"

import Link from "next/link";

const PricingSection = () => {
    return (
        <div className="section tekup-section-padding4">
            <div className="container">
                <div className="tekup-section-title center" style={{marginBottom:"48px"}}>
                    <h2>Transparent pricing. No surprises.</h2>
                    <p>Choose the engagement that fits where your business is right now. All plans include a free strategy call to make sure we are the right fit before you commit.</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-pricing-wrap all-border">
                            <div className="tekup-pricing-header">
                                <h4>Starter</h4>
                                <p>Perfect for SMEs taking their first steps into data-driven decision making.</p>
                            </div>
                            <div className="tekup-pricing-price">
                                <h2>KES 45K<span>/month</span></h2>
                            </div>
                            <Link className="tekup-pricing-btn" href="contact-us">Get Started <i className="ri-arrow-right-up-line"></i></Link>
                            <div className="tekup-pricing-feature">
                                <ul>
                                    <li><i className="ri-check-line"></i>Up to 2 custom dashboards</li>
                                    <li><i className="ri-check-line"></i>1 data source integration</li>
                                    <li><i className="ri-check-line"></i>Monthly performance report</li>
                                    <li><i className="ri-check-line"></i>Email support</li>
                                    <li><i className="ri-check-line"></i>Free onboarding session</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-pricing-wrap all-border">
                            <div className="tekup-pricing-header">
                                <h4>Growth</h4>
                                <p>For businesses ready to build a serious data capability and drive measurable ROI.</p>
                            </div>
                            <div className="tekup-pricing-price">
                                <h2>KES 120K<span>/month</span></h2>
                            </div>
                            <Link className="tekup-pricing-btn active" href="contact-us">Get Started <i className="ri-arrow-right-up-line"></i></Link>
                            <div className="tekup-pricing-feature">
                                <ul>
                                    <li><i className="ri-check-line"></i>Up to 6 custom dashboards</li>
                                    <li><i className="ri-check-line"></i>Up to 5 data source integrations</li>
                                    <li><i className="ri-check-line"></i>Weekly reporting & insights</li>
                                    <li><i className="ri-check-line"></i>Dedicated consultant</li>
                                    <li><i className="ri-check-line"></i>Team training (2 sessions/month)</li>
                                    <li><i className="ri-check-line"></i>Priority support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-pricing-wrap all-border">
                            <div className="tekup-pricing-header">
                                <h4>Enterprise</h4>
                                <p>Full-scale BI transformation for organisations that want data at the core of everything.</p>
                            </div>
                            <div className="tekup-pricing-price">
                                <h2>Custom<span> pricing</span></h2>
                            </div>
                            <Link className="tekup-pricing-btn" href="contact-us">Talk to Us <i className="ri-arrow-right-up-line"></i></Link>
                            <div className="tekup-pricing-feature">
                                <ul>
                                    <li><i className="ri-check-line"></i>Unlimited dashboards & reports</li>
                                    <li><i className="ri-check-line"></i>Full data warehouse setup</li>
                                    <li><i className="ri-check-line"></i>Predictive analytics & modelling</li>
                                    <li><i className="ri-check-line"></i>Data governance framework</li>
                                    <li><i className="ri-check-line"></i>Embedded analytics support</li>
                                    <li><i className="ri-check-line"></i>24/7 dedicated support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
