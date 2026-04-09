"use client"

import Link from "next/link";
import servicesData from "~/db/servicesData";

const ServiceSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding2">
            <div className="container">
                <div className="tekup-section-title center">
                    <h2>Everything you need to make data your biggest asset</h2>
                    <p>From strategy to execution — we cover the full spectrum of Business Intelligence and Analytics.</p>
                </div>
                <div className="row">
                    {servicesData.map(service => (
                        <div key={service.slug} className="col-lg-6" style={{ marginBottom: "30px" }}>
                            <div className="tekup-iconbox-wrap border-all" style={{ height: "100%", padding: "32px" }}>
                                <div className="tekup-iconbox-icon" style={{ marginBottom: "16px" }}>
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <div className="tekup-iconbox-data">
                                    <Link href={`/services/${service.slug}`}>
                                        <h4>{service.title}</h4>
                                    </Link>
                                    <p>{service.description}</p>
                                    <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 16px" }}>
                                        {service.outcomes.map((o, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", fontSize: "16px" }}>
                                                <i className="ri-check-line" style={{ color: "#7B2FBE" }}></i>{o}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link className="tekup-iconbox-btn" href={`/services/${service.slug}`}>
                                        Learn More <i className="ri-arrow-right-up-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
