import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // for nice arrows

const AnimatedLinesWithContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const contents = [
        {
            title: "Hardware Solutions",
            text: "Track & Trace System(Online & Offline), Bar-Coding Printer(TIJ & CIJ), Batch Coding System, Printer Cartridges (TIJ & CIJ), Bar-Coding label Printer(TTO), Rolls & Ribbon (TTO Printer), Bar-Coding Scanner, Rejection Mechanism, Winding Rewinding, Handy Printer, Conveyor & Plc Automation, Inspection Camera's, Packaging Machine, We are always ready to help you right away regarding our hardware",
            image: "/HardwareImage.png",
        },
        {
            title: "Innovative Technologies",
            text: "Software Services Inventory Management, DGFT Track and Trace Solution, Inventory Management Warehouse Management, Procurement Management, Reporting Services, ERP Integration, Vision Inspection System, Medical Inventory Software, Iveda Utility, Mobile Application, We Provide Software Development ,Web Design, Maintenance, Support Services",
            image: "/SoftwareDevelopment.jpg",
        },
        {
            title: "Digital Marketing",
            text: "With a vision to devise creative marketing solutions, tasteful design and meaningful content.",
            image: "/DigitalMarketing.jpg",
        }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? contents.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === contents.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div style={styles.wrapper}>
            {/* Animated Lines */}
            <div style={{ ...styles.line, left: '20%' }} />
            <div style={{ ...styles.line, left: '40%' }} />
            <div style={{ ...styles.line, left: '60%' }} />
            <div style={{ ...styles.line, left: '80%' }} />

            {/* Arrows */}
            <button style={{ ...styles.arrow, left: '20px' }} onClick={handlePrev}>
                <FaArrowLeft size={24} />
            </button>
            <button style={{ ...styles.arrow, right: '20px' }} onClick={handleNext}>
                <FaArrowRight size={24} />
            </button>

            {/* Content */}
            <div style={styles.content}>
                <img
                    src={contents[currentIndex].image}
                    alt="Content Visual"
                    style={styles.image}
                />
                <h1>{contents[currentIndex].title}</h1>
                <p>{contents[currentIndex].text}</p>
            </div>

            {/* Animation Keyframes */}
            <style>
                {`
                @keyframes moveUpDown {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                `}
            </style>
        </div>
    );
};

const styles = {
    wrapper: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: '#f9f9f9',
    },
    //line: {
    //    position: 'absolute',
    //    top: 0,
    //    width: '2px',
    //    height: '100%',
    //    background: 'rgba(0, 0, 0, 0.1)',
    //    animation: 'moveUpDown 4s ease-in-out infinite',
    //},
    arrow: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(255, 255, 255, 0.8)',
        border: 'none',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 3,
    },
    content: {
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        top: '52%',
        transform: 'translateY(-50%)',
        color: '#333',
        padding: '20px',
    },
    image: {
        width: '500px',
        height: '450px',
        objectFit: 'cover',
        marginBottom: '20px',
    },
};

export default AnimatedLinesWithContent;
