"use client"

import Link from "next/link";

const ServiceMenuCard = () => {
    return (
        <div className="tekup-service-menu">
            <ul>
                <li><Link href="single-service">Business Intelligence <i className="ri-arrow-right-up-line"></i></Link></li>
                <li><Link href="single-service">Data Analytics Consulting <i className="ri-arrow-right-up-line"></i></Link></li>
                <li><Link href="single-service">Data Strategy & Roadmap <i className="ri-arrow-right-up-line"></i></Link></li>
                <li><Link href="single-service">Dashboards & Reporting <i className="ri-arrow-right-up-line"></i></Link></li>
                <li><Link href="single-service">Data Warehousing & ETL <i className="ri-arrow-right-up-line"></i></Link></li>
                <li><Link href="single-service">Predictive Analytics <i className="ri-arrow-right-up-line"></i></Link></li>
            </ul>
        </div>
    );
};

export default ServiceMenuCard;
