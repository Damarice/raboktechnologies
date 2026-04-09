"use client"
import Link from 'next/link';
import BrandLogo from "~/components/Ui/BrandLogo/BrandLogo";

const FooterOneSection = ({className}) => {
    return (
        <footer className={className}>
            <div className="container">
                <div className="tekup-footer-top extra-padding">
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="tekup-footer-textarea light-color">
                                <Link href="/"><BrandLogo /></Link>
                                <p>Business Intelligence Through Decisions That Matter. Rabok Technologies helps businesses across Kenya and Africa unlock the power of their data.</p>
                                <div className="tekup-footer-info">
                                    <ul>
                                        <li><Link href="tel:+254716205797"><i className="ri-phone-fill" />+254 716 205 797</Link></li>
                                        <li><Link href="mailto:info@raboktechnologies.co.ke"><i className="ri-mail-fill" />info@raboktechnologies.co.ke</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-md-4">
                            <div className="tekup-footer-menu light-color">
                                <div className="tekup-footer-title light-color"><h5>Quick Links</h5></div>
                                <ul>
                                    <li><Link href="about-us">About Us</Link></li>
                                    <li><Link href="service">Services</Link></li>
                                    <li><Link href="pricing">Pricing</Link></li>
                                    <li><Link href="blog">Blog</Link></li>
                                    <li><Link href="contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="tekup-footer-menu light-color extar-margin">
                                <div className="tekup-footer-title light-color"><h5>Services</h5></div>
                                <ul>
                                    <li><Link href="/services/business-intelligence">Business Intelligence</Link></li>
                                    <li><Link href="/services/data-analytics">Data Analytics</Link></li>
                                    <li><Link href="/services/data-strategy">Data Strategy</Link></li>
                                    <li><Link href="/services/dashboards-reporting">Dashboards & Reporting</Link></li>
                                    <li><Link href="/services/predictive-analytics">Predictive Analytics</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4">
                            <div className="tekup-footer-menu light-color mb-0">
                                <div className="tekup-footer-title light-color"><h5>Information</h5></div>
                                <ul>
                                    <li><Link href="faq">FAQs</Link></li>
                                    <li><Link href="#">Privacy Policy</Link></li>
                                    <li><Link href="#">Terms &amp; Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tekup-footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tekup-copywright light-color right">
                                <p>&copy; 2026 Rabok Technologies. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tekup-social-icon-box style-two right">
                                <ul>
                                    <li><Link href="https://www.linkedin.com/"><i className="ri-linkedin-fill" /></Link></li>
                                    <li><Link href="https://twitter.com/"><i className="ri-twitter-fill" /></Link></li>
                                    <li><Link href="https://www.facebook.com/"><i className="ri-facebook-fill" /></Link></li>
                                    <li><Link href="https://www.instagram.com/"><i className="ri-instagram-fill" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOneSection;
