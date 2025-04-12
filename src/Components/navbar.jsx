import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link
import "../Css/navbar.css";
import { FaYoutube, FaDownload } from 'react-icons/fa';
import { IoBook } from 'react-icons/io5';

const JDTechHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.preventDefault(); // <-- Prevent default anchor behavior
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="jdtech-header">
            <div className="header-container">
                {/* Logo area */}
                <div className="logo-wrapper">
                    <Link to="/">
                        <img src="/Assets/JDTechLogo.ico" alt="JD Tech Solution Logo" className="logo-image" />
                    </Link>
                </div>

                {/* Navigation bar */}
                <nav className="main-nav">
                    <ul className="nav-items">
                        <li className="nav-item"><Link to="/" className="nav-link">HOME</Link></li>
                        <li className="nav-item"><Link to="/about-us" className="nav-link">ABOUT US</Link></li>
                        <li className="nav-item dropdown">
                            <a
                                href="#"
                                onClick={toggleDropdown}
                                className="nav-link dropdown-toggle"
                            >
                                PRODUCT & SERVICES <span className="dropdown-arrow">▼</span>
                            </a>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/hardware">Hardware</Link></li>
                                    <li><Link to="/software">Software</Link></li>
                                    <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item"><Link to="/offer" className="nav-link">OFFER</Link></li>
                        <li className="nav-item"><Link to="/reviews" className="nav-link">CUSTOMER REVIEWS</Link></li>
                        <li className="nav-item"><Link to="/contact-us" className="nav-link">CONTACT US</Link></li>
                    </ul>

                    {/* Action icons */}
                    <div className="nav-actions">
                        <Link to="/youtube" className="action-icon youtube">
                            <FaYoutube />
                            <span className="action-tooltip">Watch Videos</span>
                        </Link>
                        <Link to="/catalog" className="action-icon catalog">
                            <IoBook />
                            <span className="action-tooltip">View Catalog</span>
                        </Link>
                        <Link to="/download" className="action-icon download">
                            <FaDownload />
                            <span className="action-tooltip">Download Resources</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default JDTechHeader;
