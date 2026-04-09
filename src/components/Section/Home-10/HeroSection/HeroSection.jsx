import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="tekup-hero-section10" style={{ position: "relative", overflow: "hidden" }}>
            {/* Background image */}
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1800&q=85')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                zIndex: 0
            }} />
            {/* Gradient: solid dark on left, fades to transparent on right */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(10,4,30,1) 0%, rgba(10,4,30,0.85) 40%, rgba(10,4,30,0.3) 70%, transparent 100%)",
                zIndex: 1
            }} />

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tekup-hero-content">
                            <h1 style={{ color: "#ffffff", lineHeight: "1.1" }}>
                                Stop Guessing.<br />
                                <span style={{ color: "#a855f7" }}>Start Deciding</span><br />
                                With Data.
                            </h1>

                            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", lineHeight: "1.7", marginBottom: "36px", maxWidth: "480px" }}>
                                Rabok Technologies transforms your raw data into clear, confident decisions — so you grow faster, waste less, and stay ahead of the competition.
                            </p>

                            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
                                <Link className="tekup-default-btn" href="contact-us">
                                    Get Your Free Consultation <i className="ri-arrow-right-up-line"></i>
                                </Link>
                                <Link href="services" style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "rgba(255,255,255,0.85)",
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    textDecoration: "none",
                                    padding: "12px 4px"
                                }}>
                                    Explore Services <i className="ri-arrow-right-line"></i>
                                </Link>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                                <div style={{ display: "flex", gap: "2px" }}>
                                    {[1,2,3,4,5].map(i => (
                                        <i key={i} className="ri-star-s-fill" style={{ color: "#a855f7", fontSize: "18px" }}></i>
                                    ))}
                                </div>
                                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px" }}>
                                    Trusted by businesses to deliver insights that move the needle
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
