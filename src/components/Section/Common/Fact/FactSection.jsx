"use client"

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const FactSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("counter-fact");
            if (section) {
                const rect = section.getBoundingClientRect();
                setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="section bg-accent tekup-section-padding3" id="counter-fact">
            <div className="container">
                <div className="tekup-counter-wrap4">
                    <div className="tekup-counter-data4">
                        <h2><span>{isVisible && <CountUp end={50} duration={3} />}</span>+</h2>
                        <p>Clients Served</p>
                    </div>
                    <div className="tekup-counter-data4">
                        <h2><span>{isVisible && <CountUp end={120} duration={3} />}</span>+</h2>
                        <p>Dashboards Delivered</p>
                    </div>
                    <div className="tekup-counter-data4">
                        <h2><span>{isVisible && <CountUp end={94} duration={3} />}</span>%</h2>
                        <p>Client Satisfaction Rate</p>
                    </div>
                    <div className="tekup-counter-data4">
                        <h2><span>{isVisible && <CountUp end={5} duration={3} />}</span>+</h2>
                        <p>Years of BI Expertise</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FactSection;
