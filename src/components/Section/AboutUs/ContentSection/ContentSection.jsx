const ContentSection = () => {
    const rate1 = 94;
    const rate2 = 88;
    const rate3 = 97;
    return (
        <div className="section bg-light1 tekup-section-padding">
            <div className="container">
                <div className="row" style={{alignItems:"stretch"}}>
                    <div className="col-lg-6 order-lg-2" style={{display:"flex"}}>
                        <div style={{borderRadius:"16px", overflow:"hidden", width:"100%", minHeight:"300px"}}>
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                alt="Rabok Technologies data consulting"
                                style={{width:"100%", height:"100%", objectFit:"cover", display:"block"}}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="tekup-default-content mr-60">
                            <h2>Turning data complexity into business clarity</h2>
                            <p>We have helped businesses across Kenya and Africa move from gut-feel decisions to data-driven strategies. Our approach is practical, fast, and always tied to measurable business outcomes.</p>
                            <div className="tekup-extra-mt">
                                <div className="skillbar" data-percent={rate1}>
                                    <p className="skillbar-lable">
                                        <span className="skill-bar-title">Client Satisfaction Rate</span>
                                        <span className="skill-bar-percent">{rate1}%</span>
                                    </p>
                                    <div className="skillbar-box">
                                        <p className="skillbar-bar progressbar-one" style={{width:`${rate1}%`}}></p>
                                    </div>
                                </div>
                                <div className="skillbar" data-percent={rate2}>
                                    <p className="skillbar-lable">
                                        <span className="skill-bar-title">Projects Delivered On Time</span>
                                        <span className="skill-bar-percent">{rate2}%</span>
                                    </p>
                                    <div className="skillbar-box">
                                        <p className="skillbar-bar progressbar-two" style={{width:`${rate2}%`}}></p>
                                    </div>
                                </div>
                                <div className="skillbar" data-percent={rate3}>
                                    <p className="skillbar-lable">
                                        <span className="skill-bar-title">Clients Who Expand Their Engagement</span>
                                        <span className="skill-bar-percent">{rate3}%</span>
                                    </p>
                                    <div className="skillbar-box">
                                        <p className="skillbar-bar progressbar-three" style={{width:`${rate3}%`}}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
