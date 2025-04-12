import React from 'react';
import '../Css/footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">

                {/* Column 1: Logo and About */}
                <div className="footer-column">
                    <a href="#" className="logo">
                        <div className="logo-icon">
                            <img src="/Assets/JDTechLogo.ico" alt="JD Tech Logo" />
                        </div>
                    </a>
                    <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
                        Providing exceptional customer service since 2016. We're dedicated to helping businesses succeed with innovative solutions.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-column">
                    <h3 className="footer-title">Quick Links</h3>
                    <a href="#" className="footer-link">Home</a>
                    <a href="#" className="footer-link">Services</a>
                    <a href="#" className="footer-link">About Us</a>
                    <a href="#" className="footer-link">Testimonials</a>
                    <a href="#" className="footer-link">Contact</a>
                </div>

                {/* Column 3: Services */}
                <div className="footer-column">
                    <h3 className="footer-title">Services</h3>
                    <a href="#" className="footer-link">24/7 Support</a>
                    <a href="#" className="footer-link">Web Development</a>
                    <a href="#" className="footer-link">Software Solutions</a>
                    <a href="#" className="footer-link">Consulting</a>
                    <a href="#" className="footer-link">Quality Assurance</a>
                </div>

                {/* Column 4: Contact Us */}
                <div className="footer-column">
                    <h3 className="footer-title">Contact Us</h3>
                    <a href="#" className="footer-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg>
                        example@mail.com
                    </a>
                    <a href="#" className="footer-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        Karanjade
                    </a>
                    <a href="#" className="footer-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77 1.269 3.57 4.214 6.515 7.784 7.784a1.745 1.745 0 0 0 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015L10.93 8.29a.678.678 0 0 0-.58-.163l-2.147.429a11.72 11.72 0 0 1-2.533-2.533l.429-2.147a.678.678 0 0 0-.163-.58L3.654 1.328z" />
                        </svg>
                        +91 1234567890
                    </a>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 JD TECH SOLUTION. All rights reserved. | <a href="#" style={{ color: '#e60000', textDecoration: 'none' }}>Privacy Policy</a> | <a href="#" style={{ color: '#e60000', textDecoration: 'none' }}>Terms of Service</a></p>
                </div>

            </div>
        </div>
    );
}

export default Footer;
