const ChoseUsTwoSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="tekup-iconbox-wrap border-all3 border-all">
                        <div style={{borderRadius:"12px", overflow:"hidden", marginBottom:"20px", lineHeight:0}}>
                            <img
                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                                alt="BI specialists"
                                style={{width:"100%", height:"140px", objectFit:"cover", display:"block"}}
                            />
                        </div>
                        <div className="tekup-iconbox-data3">
                            <a href="service">
                                <h5>Specialists, Not Generalists</h5>
                            </a>
                            <p>We focus exclusively on Business Intelligence and Data Analytics — which means you get consultants who have solved your exact problem before, not someone learning on the job.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="tekup-iconbox-wrap border-all3 border-all">
                        <div style={{borderRadius:"12px", overflow:"hidden", marginBottom:"20px", lineHeight:0}}>
                            <img
                                src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"
                                alt="Fast time to value"
                                style={{width:"100%", height:"140px", objectFit:"cover", display:"block"}}
                            />
                        </div>
                        <div className="tekup-iconbox-data3">
                            <a href="service">
                                <h5>Fast Time to Value</h5>
                            </a>
                            <p>You will see meaningful insights within weeks, not months. We cut through complexity and deliver working dashboards and reports that your team can act on immediately.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="tekup-iconbox-wrap border-all3 border-all">
                        <div style={{borderRadius:"12px", overflow:"hidden", marginBottom:"20px", lineHeight:0}}>
                            <img
                                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80"
                                alt="ROI focused analytics"
                                style={{width:"100%", height:"140px", objectFit:"cover", display:"block"}}
                            />
                        </div>
                        <div className="tekup-iconbox-data3">
                            <a href="service">
                                <h5>Every Engagement Tied to ROI</h5>
                            </a>
                            <p>We do not just build reports — we align every solution to a business outcome. Reduced costs, increased revenue, or faster decisions. You will know exactly what you are getting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoseUsTwoSection;

