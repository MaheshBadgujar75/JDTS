import React, { useState } from 'react';
import "../Css/navbar.css";
import { FaYoutube, FaDownload } from 'react-icons/fa';
import { IoBook } from 'react-icons/io5';

const JDTechHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="jdtech-header">
            <div className="header-container">
                {/* Logo area */}
                <div className="logo-wrapper">
                    <img src="/Assets/JDTechLogo.ico" alt="JD Tech Solution Logo" className="logo-image" />
                </div>

                {/* Navigation bar */}
                <nav className="main-nav">
                    <ul className="nav-items">
                        <li className="nav-item"><a href="#" className="nav-link">HOME</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">ABOUT US</a></li>
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
                                    <li><a href="#">Service 1</a></li>
                                    <li><a href="#">Service 2</a></li>
                                    <li><a href="#">Service 3</a></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item"><a href="#" className="nav-link">OFFER</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">CUSTOMER REVIEWS</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">CONTACT US</a></li>
                    </ul>

                    {/* Action icons */}
                    <div className="nav-actions">
                        <a href="#" className="action-icon youtube">
                            <FaYoutube />
                            <span className="action-tooltip">Watch Videos</span>
                        </a>
                        <a href="#" className="action-icon catalog">
                            <IoBook />
                            <span className="action-tooltip">View Catalog</span>
                        </a>
                        <a href="#" className="action-icon download">
                            <FaDownload />
                            <span className="action-tooltip">Download Resources</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default JDTechHeader;