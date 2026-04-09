"use client"

import Link from "next/link";
import servicesData from "~/db/servicesData";

const ServiceMenuCard = ({ currentSlug }) => {
    return (
        <div className="tekup-service-menu">
            <ul>
                {servicesData.map((s) => (
                    <li key={s.slug} style={{ fontWeight: s.slug === currentSlug ? "700" : "400" }}>
                        <Link
                            href={`/services/${s.slug}`}
                            style={{ color: s.slug === currentSlug ? "#7B2FBE" : "inherit" }}
                        >
                            {s.title} <i className="ri-arrow-right-up-line"></i>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceMenuCard;
