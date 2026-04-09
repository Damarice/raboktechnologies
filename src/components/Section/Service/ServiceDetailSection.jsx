import Link from "next/link";
import servicesData from "~/db/servicesData";
import PageHeader from "~/components/Section/Common/PageHeader";

const ServiceDetailSection = ({ service }) => {
    return (
        <>
            {/* Uses the same PageHeader as all other pages — consistent look */}
            <PageHeader
                title={service.title}
                bgImage={service.heroImage}
                breadcrumb={[{ label: "Services", href: "/service" }]}
            />

            {/* Main content */}
            <div className="section tekup-section-padding">
                <div className="container">
                    <div className="row">
                        {/* Content */}
                        <div className="col-lg-8">
                            <div className="tekup-service-details-wrap">
                                <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "32px", lineHeight: 0 }}>
                                    <img
                                        src={service.heroImage}
                                        alt={service.title}
                                        style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
                                    />
                                </div>
                                <div className="tekup-service-details-item">
                                    <h3>{service.title}</h3>
                                    <p style={{ color: "#7B2FBE", fontWeight: "500", marginBottom: "16px" }}>{service.subtitle}</p>
                                    <p>{service.overview}</p>
                                    <p>{service.detail}</p>
                                </div>
                                <div className="tekup-service-details-item">
                                    <h3>What You Get</h3>
                                    <div className="tekup-icon-list">
                                        <ul>
                                            {service.features.map((f, i) => (
                                                <li key={i}><i className="ri-check-line"></i>{f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="tekup-service-details-item">
                                    <h3>Why It Matters</h3>
                                    <p>{service.why}</p>
                                </div>
                                <div style={{ marginTop: "32px" }}>
                                    <Link className="tekup-default-btn" href="/contact-us">
                                        Book a Free Strategy Call <i className="ri-arrow-right-up-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4">
                            <div className="tekup-service-sidebar">
                                <div className="tekup-service-menu">
                                    <h5 style={{ padding: "16px 20px", borderBottom: "1px solid #eee", marginBottom: 0 }}>All Services</h5>
                                    <ul>
                                        {servicesData.map((s) => (
                                            <li key={s.slug}>
                                                <Link
                                                    href={`/services/${s.slug}`}
                                                    style={{
                                                        color: s.slug === service.slug ? "#7B2FBE" : "inherit",
                                                        fontWeight: s.slug === service.slug ? "700" : "400",
                                                    }}
                                                >
                                                    {s.title} <i className="ri-arrow-right-up-line"></i>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{
                                    marginTop: "50px",
                                    padding: "40px 30px",
                                    borderRadius: "12px",
                                    background: "linear-gradient(135deg, #1a0a2e 0%, #7B2FBE 100%)",
                                }}>
                                    <i className="ri-bar-chart-2-line" style={{fontSize:"36px", color:"#c084fc", marginBottom:"16px", display:"block"}}></i>
                                    <h3 style={{color:"#ffffff", fontSize:"28px", lineHeight:"1.2", marginBottom:"12px"}}>Ready to unlock your data?</h3>
                                    <p style={{color:"rgba(255,255,255,0.75)", fontSize:"16px", lineHeight:"1.6", marginBottom:"32px"}}>Book a free strategy call with one of our senior BI consultants — no obligation.</p>
                                    <Link href="/contact-us" style={{
                                        display:"inline-flex",
                                        alignItems:"center",
                                        gap:"8px",
                                        background:"#ffffff",
                                        color:"#1a0a2e",
                                        fontWeight:"600",
                                        fontSize:"15px",
                                        padding:"14px 24px",
                                        borderRadius:"8px",
                                        textDecoration:"none"
                                    }}>Book Free Call <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailSection;
