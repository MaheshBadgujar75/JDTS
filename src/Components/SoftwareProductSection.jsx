import React from 'react';

const ImageTextSection = () => {
    return (
        <div style={styles.wrapper}>
            {/* Decorative gradient bubbles */}
            <div style={{ ...styles.bubble, ...styles.bubble1 }}></div>
            <div style={{ ...styles.bubble, ...styles.bubble2 }}></div>
            <div style={{ ...styles.bubble, ...styles.bubble3 }}></div>

            {/* Main content */}
            <div style={styles.container}>
                <img
                    src="/HardwareImage.png"
                    alt="Hardware Products"
                    style={styles.image}
                />
                <div style={styles.textContainer}>
                    <h2 style={styles.heading}>
                        Hardware <span style={styles.spantitle}>Products</span>
                    </h2>
                    <p style={styles.paragraph}>
                        Track & Trace System (Online & Offline), Bar-Coding Printer (TIJ & CIJ), Batch Coding System,
                        Printer Cartridges (TIJ & CIJ), Bar-Coding Label Printer (TTO), Rolls & Ribbon (TTO Printer),
                        Bar-Coding Scanner, Rejection Mechanism, Winding Rewinding, Handy Printer, Conveyor & PLC Automation,
                        Inspection Cameras, Packaging Machine. We are always ready to help you with our hardware solutions.
                    </p>
                    <button style={styles.hardwareButton}>Browse Products</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px',
        background: '#fff',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        maxWidth: '1200px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        gap: '40px',
        flexWrap: 'wrap',
        zIndex: 2,
        position: 'relative',
    },
    image: {
        width: '500px',
        height: 'auto',
        borderRadius: '20px',
        objectFit: 'cover',
    },
    textContainer: {
        flex: 1,
        minWidth: '300px',
    },
    heading: {
        fontSize: '36px',
        marginBottom: '20px',
        color: '#333',
        fontWeight: 'bold',
    },
    spantitle: {
        color: '#e63946',
    },
    paragraph: {
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '30px',
    },
    hardwareButton: {
        backgroundColor: '#e63946',
        color: '#fff',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '30px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },

    // Bubbles styles
    bubble: {
        position: 'absolute',
        borderRadius: '50%',
        opacity: 0.6,
        zIndex: 1,
        filter: 'blur(80px)',
    },
    bubble1: {
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, #ff4d4d, #ffffff)',
        top: '100px',
        left: '-100px',
    },
    bubble2: {
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, #ff9999, #ffffff)',
        bottom: '50px',
        right: '50px',
    },
    bubble3: {
        width: '250px',
        height: '250px',
        background: 'linear-gradient(135deg, #e63946, #ffffff)',
        top: '300px',
        right: '-100px',
    },
};

export default ImageTextSection;
