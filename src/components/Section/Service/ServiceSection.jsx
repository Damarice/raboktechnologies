"use client"

import Link from "next/link";

const services = [
    {
        id: 1,
        title: "Business Intelligence",
        icon: "/images/iconbox/icon1.png",
        description: "Get a real-time, unified view of your business performance. We design and build BI environments that give your leadership team the clarity to act fast and with confidence.",
        outcomes: ["Executive dashboards", "KPI tracking", "Performance reporting"]
    },
    {
        id: 2,
        title: "Data Analytics Consulting",
        icon: "/images/iconbox/icon2.png",
        description: "Go beyond surface-level reports. Our analysts dig deep into your data to surface the trends, patterns, and anomalies that reveal exactly where to grow and where to cut.",
        outcomes: ["Root cause analysis", "Trend identification", "Opportunity mapping"]
    },
    {
        id: 3,
        title: "Data Strategy & Roadmap",
        icon: "/images/iconbox/icon3.png",
        description: "Most businesses collect data but have no plan for it. We build you a clear, actionable data strategy that turns your data into a long-term competitive advantage.",
        outcomes: ["Data maturity assessment", "Technology selection", "Implementation roadmap"]
    },
    {
        id: 4,
        title: "Dashboards & Reporting",
        icon: "/images/iconbox/icon4.png",
        description: "Custom interactive dashboards your team will actually use — clear, visual, and updated in real time. Built on Power BI, Tableau, Looker, or your preferred platform.",
        outcomes: ["Self-service dashboards", "Automated reports", "Mobile-ready views"]
    },
    {
        id: 5,
        title: "Data Warehousing & ETL",
        icon: "/images/iconbox/icon5.png",
        description: "Stop working from conflicting spreadsheets. We centralise all your data sources into a single, reliable warehouse so every team is working from the same truth.",
        outcomes: ["Cloud data warehouses", "ETL pipeline design", "Data integration"]
    },
    {
        id: 6,
        title: "Predictive Analytics",
        icon: "/images/iconbox/icon6.png",
        description: "Know what is coming before it happens. We build predictive models that forecast demand, identify churn risk, and surface revenue opportunities before your competitors see them.",
        outcomes: ["Demand forecasting", "Churn prediction", "Revenue modelling"]
    }
];

const ServiceSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding2">
            <div className="container">
                <div className="tekup-section-title center">
                    <h2>Everything you need to make data your biggest asset</h2>
                    <p>From strategy to execution — we cover the full spectrum of Business Intelligence and Analytics.</p>
                </div>
                <div className="row">
                    {services.map(service => (
                        <div key={service.id} className="col-lg-6" style={{marginBottom:"30px"}}>
                            <div className="tekup-iconbox-wrap border-all" style={{height:"100%", padding:"32px"}}>
                                <div className="tekup-iconbox-icon" style={{marginBottom:"16px"}}>
                                    <img src={service.icon} alt={service.title} />
                                </div>
                                <div className="tekup-iconbox-data">
                                    <Link href="single-service"><h4>{service.title}</h4></Link>
                                    <p>{service.description}</p>
                                    <ul style={{listStyle:"none", padding:0, margin:"12px 0 16px"}}>
                                        {service.outcomes.map((o, i) => (
                                            <li key={i} style={{display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px", fontSize:"16px"}}>
                                                <i className="ri-check-line" style={{color:"#7B2FBE"}}></i>{o}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link className="tekup-iconbox-btn" href="single-service">Learn More <i className="ri-arrow-right-up-line"></i></Link>
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
