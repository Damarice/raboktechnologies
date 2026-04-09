"use client"

import Link from "next/link";

const CtaSection = () => {
    return (
        <div className="section" style={{
            position: "relative",
            overflow: "hidden"
        }}>
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0
            }} />
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(123,47,190,0.92) 0%, rgba(26,10,46,0.95) 100%)",
                zIndex: 1
            }} />
            <div className="container" style={{position: "relative", zIndex: 2}}>
                <div className="tekup-cta-wrap">
                    <div className="tekup-cta-content center">
                        <h2 style={{color:"#ffffff"}}>Your competitors are already using their data. Are you?</h2>
                        <p style={{color:"rgba(255,255,255,0.85)"}}>Every day without a clear BI strategy is a day of missed opportunities. Let Rabok Technologies show you exactly what your data is worth — with a free, no-obligation consultation.</p>
                        <div className="tekup-extra-mt">
                            <Link className="tekup-default-btn tekup-white-btn" href="contact-us">Claim Your Free Consultation <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
