"use client"
import { Accordion } from 'react-bootstrap'

const FaqSection = () => {
    return (
        <div className='section tekup-section-padding accordion-one'>
            <div className='container'>
                <div className="tekup-section-title center" style={{marginBottom:"48px"}}>
                    <h2>Questions we get asked a lot</h2>
                    <p>If you do not see your question here, just reach out — we are happy to talk.</p>
                </div>
                <Accordion defaultActiveKey="0">
                    <div className='tekup-accordion-column'>
                        <div className='tekup-accordion-wrap mt-0 init-wrap'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span>Q1.</span> What exactly does Rabok Technologies do?</Accordion.Header>
                                <Accordion.Body>
                                    <p>We are a Business Intelligence and Data Analytics consultancy. We help businesses turn their raw data into clear, actionable insights — through custom dashboards, analytics strategies, data warehousing, and predictive modelling. In short: we make your data work for you.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </div>
                    <div className='tekup-accordion-column'>
                        <div className='tekup-accordion-wrap mt-0 init-wrap'>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span>Q2.</span> How quickly will I see results?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Most clients have working dashboards and initial insights within 2–4 weeks of starting an engagement. We prioritise quick wins early so you see value fast, while building toward a longer-term BI capability.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </div>
                    <div className='tekup-accordion-column'>
                        <div className='tekup-accordion-wrap mt-0 init-wrap'>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span>Q3.</span> Do I need to have my data organised before working with you?</Accordion.Header>
                                <Accordion.Body>
                                    <p>Not at all. Many of our clients come to us with messy, scattered, or incomplete data. Part of our process is a data audit — we assess what you have, identify gaps, and build the right foundation before we start building dashboards or reports.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </div>
                    <div className='tekup-accordion-column'>
                        <div className='tekup-accordion-wrap mt-0 init-wrap'>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><span>Q4.</span> Which BI tools do you work with?</Accordion.Header>
                                <Accordion.Body>
                                    <p>We are tool-agnostic and work with all major platforms including Microsoft Power BI, Tableau, Looker, Google Data Studio, and more. We recommend the right tool based on your existing tech stack, team capabilities, and budget — not what we prefer.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </div>
                    <div className='tekup-accordion-column'>
                        <div className='tekup-accordion-wrap mt-0 init-wrap'>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><span>Q5.</span> Is my business too small for BI consulting?</Accordion.Header>
                                <Accordion.Body>
                                    <p>No. In fact, smaller businesses often see the fastest ROI from BI because the insights are more immediately actionable. Our Starter plan is specifically designed for SMEs who want to start making data-driven decisions without a large upfront investment.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </div>
                    <div className='tekup-accordion-column'>
                        <div className='tekup-accordion-wrap mt-0 init-wrap'>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header><span>Q6.</span> What happens after the project is delivered?</Accordion.Header>
                                <Accordion.Body>
                                    <p>We do not just deliver and disappear. All our plans include ongoing support, and we offer retainer arrangements for clients who want a dedicated BI partner. We also provide team training to ensure your people can use and maintain the solutions we build.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    </div>
                </Accordion>
            </div>
        </div>
    );
};

export default FaqSection;
