import Link from "next/link";


const FooterTenScetion = () => {
    return (
        <footer className="tekup-footer-section bg-light1">
        <div className="container">
          <div className="tekup-infobox-wrap extra-padding">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <Link href="tel:+254716205797">
                  <div className="tekup-infobox-item bg-white">
                    <div className="tekup-infobox-icon">
                      <i className="ri-phone-fill"></i>
                    </div>
                    <div className="tekup-infobox-data dark-color">
                      <p>Call anytime</p>
                      <h5>+254 716 205 797</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link href="mailto:info@raboktechnologies.co.ke">
                  <div className="tekup-infobox-item bg-white">
                    <div className="tekup-infobox-icon">
                      <i className="ri-mail-fill"></i>
                    </div>
                    <div className="tekup-infobox-data dark-color">
                      <p>Email address</p>
                      <h5>info@raboktechnologies.co.ke</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tekup-infobox-item bg-white">
                  <div className="tekup-infobox-icon">
                    <i className="ri-time-fill"></i>
                  </div>
                  <div className="tekup-infobox-data dark-color">
                    <p>Office Hours</p>
                    <h5>8:00 AM – 6:00 PM</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tekup-footer-top tekup-section-padding-bottom">
            <div className="row">
              <div className="col-xl-4 offset-xl-1 col-lg-4 order-lg-4">
                <div className="tekup-footer-title">
                  <h5>Subscribe Our Newsletter</h5>
                  <p>Stay updated with the latest in BI and data analytics</p>
                </div>
                <div className="tekup-subscription two">
                  <form action="#">
                    <input type="email" placeholder="Enter your email"/>
                    <button id="tekup-subscription-btn" type="button">
                      <i className="ri-send-plane-fill"></i>
                    </button>
                  </form>
                </div>
                <div className="tekup-social-icon dark-color m_bottom">
                  <ul>
                    <li>
                      <Link href="https://www.linkedin.com/">
                        <i className="ri-linkedin-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/">
                        <i className="ri-twitter-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.facebook.com/">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/">
                        <i className="ri-instagram-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4">
                <div className="tekup-footer-menu">
                  <div className="tekup-footer-title">
                    <h5>Quick Links</h5>
                  </div>
                  <ul>
                    <li><Link href="about-us">About Us</Link></li>
                    <li><Link href="service">Services</Link></li>
                    <li><Link href="pricing">Pricing</Link></li>
                    <li><Link href="blog">Blog</Link></li>
                    <li><Link href="contact-us">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="tekup-footer-menu extar-margin">
                  <div className="tekup-footer-title">
                    <h5>Services</h5>
                  </div>
                  <ul>
                    <li><Link href="service">Business Intelligence</Link></li>
                    <li><Link href="service">Data Analytics</Link></li>
                    <li><Link href="service">Data Strategy</Link></li>
                    <li><Link href="service">Dashboard & Reporting</Link></li>
                    <li><Link href="service">Predictive Analytics</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4">
                <div className="tekup-footer-menu mb-0">
                  <div className="tekup-footer-title">
                    <h5>Information</h5>
                  </div>
                  <ul>
                    <li><Link href="faq">FAQs</Link></li>
                    <li><Link href="">Privacy Policy</Link></li>
                    <li><Link href="">Terms & Conditions</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tekup-footer-bottom center dark">
            <div className="tekup-copywright">
              <p>&copy; 2026 Rabok Technologies. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default FooterTenScetion;
