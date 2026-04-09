"use client"
import { Accordion } from "react-bootstrap";

const AccordionSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding accordion-two">
            <div className="container">
                <div className="row" style={{alignItems: "stretch"}}>
                    <div className="col-lg-6 order-lg-2" style={{display:"flex"}}>
                        <div style={{borderRadius: "16px", overflow: "hidden", width:"100%", minHeight:"320px"}}>
                            <img
                                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
                                alt="Data analytics consulting team at work"
                                style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6" style={{display:"flex", alignItems:"center"}}>
                        <div className="tekup-default-content mr-60">
                            <h2>We do not just hand you a report. We change how you think about your business.</h2>
                            <p>Our clients do not come back because we built them a nice dashboard. They come back because working with us changed the way their leadership team makes decisions — and the results followed.</p>
                            <div className="tekup-extra-mt accordion-extra-style">
                                <Accordion defaultActiveKey="0" className="tekup-accordion-wrap2 init-wrap">
                                    <div className="tekup-accordion-item2 open">
                                        <div className="tekup-accordion-header2 init-header">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    <h5><span><i className="ri-add-line"></i></span> Insights you can act on from day one</h5>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>We do not spend months in discovery. Within the first weeks of engagement, you will have working reports and dashboards that surface the decisions your business needs to make right now — not next quarter.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                    </div>
                                    <div className="tekup-accordion-item2">
                                        <div className="tekup-accordion-header2 init-header">
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    <h5><span><i className="ri-add-line"></i></span> We stay until it sticks</h5>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>Many consultants deliver and disappear. We stay engaged through adoption — training your team, refining the solution, and making sure the insights are actually being used to drive better outcomes.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                    </div>
                                    <div className="tekup-accordion-item2">
                                        <div className="tekup-accordion-header2 init-header">
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>
                                                    <h5><span><i className="ri-add-line"></i></span> Built for your industry, not just your data</h5>
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    <p>We bring sector-specific knowledge to every engagement. That means we ask the right questions, understand your KPIs, and build solutions that reflect how your industry actually works — not a generic template.</p>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </div>
                                    </div>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionSection;
