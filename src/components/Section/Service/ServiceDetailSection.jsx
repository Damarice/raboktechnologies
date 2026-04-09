import Link from "next/link";
import servicesData from "~/db/servicesData";

const ServiceDetailSection = ({ service }) => {
    return (
        <>
            {/* Page hero */}
            <div style={{
                position: "relative",
                overflow: "hidden",
                marginTop: "130px",
            }}>
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `url('${service.heroImage}')`,
                    backgroundSize: "cover", backgroundPosition: "center", zIndex: 0,
                }} />
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(135deg, rgba(26,10,46,0.88) 0%, rgba(123,47,190,0.75) 100%)",
                    zIndex: 1,
                }} />
                <div className="container" style={{ position: "relative", zIndex: 2, padding: "60px 0" }}>
                    <nav style={{ marginBottom: "12px" }}>
                        <Link href="/" style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px" }}>Home</Link>
                        <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
                        <Link href="/service" style={{ color: "rgba(255,255,255,0.65)", fontSize: "16px" }}>Services</Link>
                        <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
                        <span style={{ color: "#ffffff", fontSize: "16px" }}>{service.title}</span>
                    </nav>
                    <h1 style={{ color: "#ffffff", fontSize: "48px", lineHeight: "1.15em", maxWidth: "700px" }}>{service.title}</h1>
                    <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "20px", maxWidth: "600px", marginTop: "16px" }}>{service.subtitle}</p>
                </div>
            </div>

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
                                    <h3>Overview</h3>
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
                                            <li key={s.slug} style={{ fontWeight: s.slug === service.slug ? "700" : "400" }}>
                                                <Link
                                                    href={`/services/${s.slug}`}
                                                    style={{ color: s.slug === service.slug ? "#7B2FBE" : "inherit" }}
                                                >
                                                    {s.title} <i className="ri-arrow-right-up-line"></i>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="tekup-service-contact" style={{ backgroundImage: "url(/images/service/bg.png)" }}>
                                    <img src="/images/service/icon.png" alt="" />
                                    <h3>Ready to unlock your data?</h3>
                                    <p>Book a free strategy call with one of our senior BI consultants — no obligation.</p>
                                    <Link className="tekup-default-btn tekup-white-btn" href="/contact-us">
                                        Book Free Call <i className="ri-arrow-right-up-line"></i>
                                    </Link>
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
