import Link from "next/link";

const pageImages = {
    "About Us":         "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80",
    "Our Services":     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80",
    "Business Intelligence": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    "Pricing plan":     "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80",
    "Contact us":       "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80",
    "Faqs":             "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80",
    "Blog":             "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80",
};

const PageHeader = ({ title, bgImage }) => {
    const bg = bgImage || pageImages[title] || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80";

    return (
        <div
            className="tekup-breadcrumb"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
        >
            {/* Dark overlay so text is always readable */}
            <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(26,10,46,0.82) 0%, rgba(26,10,46,0.65) 100%)",
                zIndex: 0
            }} />
            <div className="container" style={{position:"relative", zIndex:1}}>
                <h1 className="post__title" style={{color:"#ffffff"}}>{title}</h1>
                <nav className="breadcrumbs">
                    <ul>
                        <li><Link href="/" style={{color:"rgba(255,255,255,0.75)"}}>Home</Link></li>
                        <li style={{color:"#ffffff"}}>{title}{title === "404" ? " page not found" : ""}</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PageHeader;
