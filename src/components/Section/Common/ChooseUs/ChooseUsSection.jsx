"use client"

import Link from "next/link";

const ChooseUsSection = ({className}) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="tekup-section-title center" style={{marginBottom:"48px"}}>
                    <h2>Why clients choose Rabok Technologies</h2>
                    <p>We are not just another consulting firm. Here is what makes the difference.</p>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-iconbox-wrap4">
                            <div className="tekup-iconbox-icon4">
                                <img src="/images/iconbox/icon8.png" alt="BI specialists" />
                            </div>
                            <div className="tekup-iconbox-data4">
                                <h4>Specialists, Not Generalists</h4>
                                <p>We focus exclusively on BI and Data Analytics — you get consultants who have solved your exact problem before.</p>
                                <Link className="tekup-iconbox-btn" href="service">Learn More <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-iconbox-wrap4">
                            <div className="tekup-iconbox-icon4">
                                <img src="/images/iconbox/icon9.png" alt="Fast results" />
                            </div>
                            <div className="tekup-iconbox-data4">
                                <h4>Fast Time to Value</h4>
                                <p>Working dashboards and insights within weeks, not months. We cut through complexity and deliver results your team can act on immediately.</p>
                                <Link className="tekup-iconbox-btn" href="service">Learn More <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="tekup-iconbox-wrap4">
                            <div className="tekup-iconbox-icon4">
                                <img src="/images/iconbox/icon10.png" alt="ROI focused" />
                            </div>
                            <div className="tekup-iconbox-data4">
                                <h4>Every Engagement Tied to ROI</h4>
                                <p>We align every solution to a business outcome — reduced costs, increased revenue, or faster decisions. You will know exactly what you are getting.</p>
                                <Link className="tekup-iconbox-btn" href="service">Learn More <i className="ri-arrow-right-up-line"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsSection;
