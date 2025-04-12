// SoftwareServicesComponent.jsx
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import '../Css/SoftwareServicesPage.css'

const SoftwareServicesComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSoftware, setSelectedSoftware] = useState(null);
    const [filteredSoftware, setFilteredSoftware] = useState([]);

    // Sample software data
    const softwareList = [
        {
            id: 1,
            name: "DGFT Track & Trace",
            image: "/api/placeholder/300/200",
            description: "A powerful code editor with syntax highlighting for over 40 programming languages. Features include intelligent auto-completion, integrated terminal, and Git support.",
            features: ["Syntax highlighting", "Auto-completion", "Git integration", "Terminal access"]
        },
        {
            id: 2,
            name: "Barcode Software",
            image: "/api/placeholder/300/200",
            description: "Complete database solution for managing SQL and NoSQL databases. Connect, query, and visualize your data with an intuitive interface.",
            features: ["Multiple database support", "Visual query builder", "Data export", "Scheduled backups"]
        },
        {
            id: 3,
            name: "Inventory Management",
            image: "/api/placeholder/300/200",
            description: "Simplify your deployment process with our one-click solution. Support for all major cloud providers and container orchestration.",
            features: ["AWS/Azure/GCP support", "Container deployment", "CI/CD integration", "Rollback functionality"]
        },
        {
            id: 4,
            name: "WareHouse Management",
            image: "/api/placeholder/300/200",
            description: "Enterprise-grade security scanning for your applications. Detect vulnerabilities before they become problems.",
            features: ["Vulnerability detection", "Compliance checking", "Automated scanning", "Detailed reports"]
        },
        {
            id: 5,
            name: "Procurement Management",
            image: "/api/placeholder/300/200",
            description: "Design, develop, and test APIs with our comprehensive toolkit. Supports REST, GraphQL, and SOAP.",
            features: ["API documentation", "Request testing", "Mock servers", "Performance testing"]
        },
        {
            id: 6,
            name: "Reporting Services",
            image: "/api/placeholder/300/200",
            description: "Turn your data into insights with our powerful analytics platform. Real-time dashboards and custom reports.",
            features: ["Real-time analytics", "Custom dashboards", "Data visualization", "Export capabilities"]
        },
        {
            id: 7,
            name: "ERP Integration",
            image: "/api/placeholder/300/200",
            description: "Turn your data into insights with our powerful analytics platform. Real-time dashboards and custom reports.",
            features: ["Real-time analytics", "Custom dashboards", "Data visualization", "Export capabilities"]
        },
        {
            id: 6,
            name: "Vision Inspection System",
            image: "/api/placeholder/300/200",
            description: "Turn your data into insights with our powerful analytics platform. Real-time dashboards and custom reports.",
            features: ["Real-time analytics", "Custom dashboards", "Data visualization", "Export capabilities"]
        },
        {
            id: 6,
            name: "Medical Inventory Software",
            image: "/api/placeholder/300/200",
            description: "Turn your data into insights with our powerful analytics platform. Real-time dashboards and custom reports.",
            features: ["Real-time analytics", "Custom dashboards", "Data visualization", "Export capabilities"]
        },
        {
            id: 6,
            name: "IVEDA Utility",
            image: "/api/placeholder/300/200",
            description: "Turn your data into insights with our powerful analytics platform. Real-time dashboards and custom reports.",
            features: ["Real-time analytics", "Custom dashboards", "Data visualization", "Export capabilities"]
        },
        {
            id: 6,
            name: "Mobile Application",
            image: "/api/placeholder/300/200",
            description: "Turn your data into insights with our powerful analytics platform. Real-time dashboards and custom reports.",
            features: ["Real-time analytics", "Custom dashboards", "Data visualization", "Export capabilities"]
        }
    ];

    // Filter software based on search term
    useEffect(() => {
        const results = softwareList.filter(software =>
            software.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSoftware(results);
    }, [searchTerm]);

    // Initialize with all software
    useEffect(() => {
        setFilteredSoftware(softwareList);
    }, []);

    const handleCardClick = (software) => {
        setSelectedSoftware(software);
    };

    const closePopup = () => {
        setSelectedSoftware(null);
    };

    return (
        <div className="software-services-container">
            <div className="search-container">
                <div className="search-input-wrapper">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Search software..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>

            <div className="software-grid">
                {filteredSoftware.map(software => (
                    <div
                        key={software.id}
                        className="software-card"
                        onClick={() => handleCardClick(software)}
                    >
                        <div className="card-image-container">
                            <img src={software.image} alt={software.name} className="card-image" />
                        </div>
                        <h3 className="card-title">{software.name}</h3>
                    </div>
                ))}
            </div>

            {selectedSoftware && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closePopup}>×</button>
                        <div className="popup-header">
                            <h2>{selectedSoftware.name}</h2>
                        </div>
                        <div className="popup-body">
                            <img src={selectedSoftware.image} alt={selectedSoftware.name} className="popup-image" />
                            <p className="popup-description">{selectedSoftware.description}</p>
                            <div className="popup-features">
                                <h3>Key Features:</h3>
                                <ul>
                                    {selectedSoftware.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SoftwareServicesComponent;