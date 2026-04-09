import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="tekup-hero-section10" style={{
            position: "relative",
        }}>
            <div style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0
            }} />
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(90deg, rgba(26,10,46,0.93) 0%, rgba(26,10,46,0.78) 55%, rgba(26,10,46,0.25) 100%)",
                zIndex: 1
            }} />
            <div className="container" style={{position: "relative", zIndex: 2}}>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="tekup-hero-content">
                            <h1 style={{color: "#ffffff"}}>Stop Guessing. Start Deciding With Data.</h1>
                            <p style={{color: "rgba(255,255,255,0.85)", fontSize: "18px", marginBottom: "24px"}}>Rabok Technologies turns your untapped data into clear, confident decisions — so you grow faster, waste less, and stay ahead of the competition.</p>
                            <Link className="tekup-default-btn" href="contact-us">Get Your Free Consultation <i className="ri-arrow-right-up-line"></i></Link>
                            <div style={{marginTop: "24px", display: "flex", alignItems: "center", gap: "10px", flexWrap:"wrap"}}>
                                <div style={{display:"flex", gap:"3px"}}>
                                    {[1,2,3,4,5].map(i => <i key={i} className="ri-star-s-fill" style={{color:"#a855f7", fontSize:"18px"}}></i>)}
                                </div>
                                <p style={{margin:0, color:"rgba(255,255,255,0.7)", fontSize:"15px"}}>Trusted by businesses to deliver insights that move the needle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
