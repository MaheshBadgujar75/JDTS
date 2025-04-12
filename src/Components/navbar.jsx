import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../Css/navbar.css";
import { FaYoutube, FaDownload } from 'react-icons/fa';
import { IoBook } from 'react-icons/io5';

const JDTechHeader = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isHardwareDropdownOpen, setIsHardwareDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const hardwareDropdownRef = useRef(null);

    // Effect to handle clicks outside the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            // Close the hardware dropdown if clicking outside
            if (hardwareDropdownRef.current &&
                !hardwareDropdownRef.current.contains(event.target)) {
                setIsHardwareDropdownOpen(false);
            }

            // Close the main dropdown if clicking outside
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
                setIsHardwareDropdownOpen(false);
            }
        }

        // Add event listener only when either dropdown is open
        if (isDropdownOpen || isHardwareDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen, isHardwareDropdownOpen]);

    const toggleDropdown = (e) => {
        e.preventDefault();
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleHardwareDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsHardwareDropdownOpen(!isHardwareDropdownOpen);
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
                        <li className="nav-item dropdown" ref={dropdownRef}>
                            <a
                                href="#"
                                onClick={toggleDropdown}
                                className="nav-link dropdown-toggle"
                            >
                                PRODUCT & SERVICES <span className="dropdown-arrow">▼</span>
                            </a>
                            {isDropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li className="submenu-item dropdown" ref={hardwareDropdownRef}>
                                        <a
                                            href="#"
                                            onClick={toggleHardwareDropdown}
                                            className="dropdown-link"
                                        >
                                            Hardware <span className="dropdown-arrow">▶</span>
                                        </a>
                                        {isHardwareDropdownOpen && (
                                            <ul className="submenu">
                                                <li><Link to="/hardware/trackandtrace">Track and Trace system (Online and Offline)</Link></li>
                                                <li><Link to="/hardware/batchcodingandbarcoding">BatchCoding and Barcoding Printer (TIJ)</Link></li>
                                                <li><Link to="/hardware/printercartridges">Printer Cartridges (TIJ and CIJ)</Link></li>
                                                <li><Link to="/hardware/printerconsumable">Printer Consumables (TIJ and CIJ)</Link></li>
                                                <li><Link to="/hardware/tto">Barcode Label Printer (TTO)</Link></li>
                                                <li><Link to="/hardware/ttoprinter">Rolls and Ribbon (TTO Printer)</Link></li>
                                                <li><Link to="/hardware/barcodingscanner">Barcoding Scanner</Link></li>
                                                <li><Link to="/hardware/rejectionmechanism">Rejection Mechanism</Link></li>
                                                <li><Link to="/hardware/winderrewinder">Winder Rewinder</Link></li>
                                                <li><Link to="/hardware/handyprinter">Handy Printer</Link></li>
                                                <li><Link to="/hardware/conveyorandplcautomation">Conveyor and PLC Automation</Link></li>
                                                <li><Link to="/hardware/inspectioncameras">Inspection Cameras</Link></li>
                                                <li><Link to="/hardware/packingmachine">Packing Machine</Link></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li><Link to="/software">Software</Link></li>
                                    <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item"><Link to="/offer" className="nav-link">OFFER</Link></li>
                        <li className="nav-item"><Link to="/reviews" className="nav-link">CUSTOMER REVIEWS</Link></li>
                        <li className="nav-item"><Link to="/ContactUs" className="nav-link">CONTACT US</Link></li>
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