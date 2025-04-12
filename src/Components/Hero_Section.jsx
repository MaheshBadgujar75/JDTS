import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../Css/hero_section.css'; // Import your CSS file for styling
import CustomerServiceSection  from '../Components/CustomerServiceSection';
import HardwareProductSection from '../Components/HardwareProductSection';

// Scroll animation component - simplified to remove framer-motion dependencies
const ScrollReveal = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// Staggered child animation component
const StaggeredItem = ({ children, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
        >
            {children}
        </motion.div>
    );
};

const HeroCarousel = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const timeoutRef = useRef(null);
    const containerRef = useRef(null);
    const aboutRef = useRef(null);
    const [aboutInView, setAboutInView] = useState(false);

    // Setup intersection observer for about section
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAboutInView(true);
                    observer.unobserve(aboutRef.current);
                }
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    // Sample images array if none provided
    const defaultImages = [
        {
            id: 1,
            src: "/SlidingImages/SlidingImage1.jpg",
            alt: "Tech Solutions"
        },
        {
            id: 2,
            src: "/SlidingImages/SlidingImage2.jpg",
            alt: "Digital Services"
        },
        {
            id: 3,
            src: "/SlidingImages/SlidingImage3.jpg",
            alt: "IT Support"
        },
        {
            id: 4,
            src: "/SlidingImages/SlidingImage4.jpg",
            alt: "Cloud Solutions"
        }
    ];

    const carousel = images.length > 0 ? images : defaultImages;

    // Auto advance slides
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (isAutoPlaying) {
            timeoutRef.current = setTimeout(() => {
                nextSlide();
            }, 5000); // Change slide every 5 seconds
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex, isAutoPlaying]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length);
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const pauseAutoPlay = () => {
        setIsAutoPlaying(false);
    };

    const resumeAutoPlay = () => {
        setIsAutoPlaying(true);
    };

    // Variants for slide animation
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
            }
        })
    };

    // Variants for content reveal animation with staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    // Styles
    const aboutSectionStyle = {
        background: 'white',
        color: '#333',
        position: 'relative',
        padding: '3rem 0',
        overflow: 'hidden'
    };

    const redAccentStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '8px',
        background: '#e30613', // Red color matching navbar
    };

    const logoTitleStyle = {
        color: '#e30613', // Red color matching navbar
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        fontSize: '2.5rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    const subtitleStyle = {
        color: '#333',
        fontSize: '1.2rem',
        marginBottom: '2rem'
    };

    const descriptionStyle = {
        color: '#444',
        lineHeight: '1.6',
        marginBottom: '1.5rem'
    };

    const servicesSectionStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        marginTop: '2rem',
        marginBottom: '2rem'
    };

    const serviceItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
        padding: '1.5rem',
        flex: '1 1 200px',
        border: '1px solid #eee',
        transition: 'all 0.3s ease'
    };

    const serviceIconStyle = {
        background: '#e30613', // Red color matching navbar
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem'
    };

    const serviceNameStyle = {
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    };

    const ctaButtonStyle = {
        display: 'inline-block',
        background: '#e30613', // Red color matching navbar
        color: 'white',
        padding: '12px 24px',
        borderRadius: '30px',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(227, 6, 19, 0.3)',
        border: 'none',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '1rem',
        marginTop: '1rem',
        transition: 'all 0.3s ease'
    };

    const yearHighlightStyle = {
        color: '#e30613', // Red color matching navbar
        fontWeight: 'bold'
    };

    const contentSectionStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
    };

    const imageContainerStyle = {
        flex: '1 1 400px',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        border: '4px solid white',
        outline: '1px solid #e30613' // Red border accent
    };

    const techImageStyle = {
        width: '100%',
        height: '22vh',
        display: 'block'
    };

    const textContentStyle = {
        flex: '1 1 500px'
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '3rem',
        position: 'relative',
        padding: '0 1rem'
    };

    return (
        <>
            {/* Hero Carousel with Parallax Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hero-container"
                ref={containerRef}
                onMouseEnter={pauseAutoPlay}
                onMouseLeave={resumeAutoPlay}
            >
                <div className="carousel-wrapper">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="carousel-slide"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <motion.div
                                className="slide-background"
                                style={{ backgroundImage: `url(${carousel[currentIndex].src})` }}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 6 }}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Overlay gradient */}
                    <div className="overlay-gradient"></div>

                    {/* Navigation arrows with hover effect */}
                    <motion.button
                        className="carousel-btn prev-btn"
                        onClick={prevSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaArrowLeft />
                    </motion.button>

                    <motion.button
                        className="carousel-btn next-btn"
                        onClick={nextSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaArrowRight />
                    </motion.button>

                    {/* Indicators */}
                    <div className="carousel-indicators">
                        {carousel.map((_, index) => (
                            <motion.button
                                key={index}
                                className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Enhanced About Section with Red/White Color Scheme */}
            <div className="about-container" style={aboutSectionStyle}>
                <div style={redAccentStyle}></div>

                <motion.div
                    className="about-section"
                    ref={aboutRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate={aboutInView ? "visible" : "hidden"}
                >
                    <ScrollReveal>
                        <div style={headerStyle}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '80px' }}
                                transition={{ duration: 1, delay: 0.5 }}
                                style={{
                                    height: '4px',
                                    background: '#e30613',
                                    margin: '0 auto 1rem auto'
                                }}
                            />

                            <motion.h1
                                style={logoTitleStyle}
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                JD Tech Solution
                            </motion.h1>

                            <motion.p
                                style={subtitleStyle}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Innovative Technology Solutions for Modern Business Challenges
                            </motion.p>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '80px' }}
                                transition={{ duration: 1, delay: 0.5 }}
                                style={{
                                    height: '4px',
                                    background: '#e30613',
                                    margin: '1rem auto 0 auto'
                                }}
                            />
                        </div>
                    </ScrollReveal>

                    <div style={contentSectionStyle}>
                        <ScrollReveal>
                            <motion.div
                                style={imageContainerStyle}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="/AboutUsImage/AboutUsImage.jpg"
                                    alt="Digital Technology Visualization"
                                    style={techImageStyle}
                                />
                            </motion.div>
                        </ScrollReveal>

                        <div style={textContentStyle}>
                            <ScrollReveal>
                                <p style={descriptionStyle}>
                                    JD Group is a leading business group established in <span style={yearHighlightStyle}>2016</span>.
                                    With our dedication to innovation and excellence, we've expanded our presence across
                                    multiple sectors including Information Technology, Security Solutions, Financial Services,
                                    and Biotechnology Research.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal>
                                <p style={descriptionStyle}>
                                    Our flagship product JDCODE, developed by our specialized IT division JD Tech Solution,
                                    represents our commitment to creating cutting-edge technology that addresses the complex
                                    challenges faced by modern businesses in a rapidly evolving digital landscape.
                                </p>
                            </ScrollReveal>

                            <motion.div
                                style={servicesSectionStyle}
                                variants={containerVariants}
                                initial="hidden"
                                animate={aboutInView ? "visible" : "hidden"}
                            >
                                <StaggeredItem index={0}>
                                    <motion.div
                                        style={serviceItemStyle}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: "0 10px 20px rgba(227, 6, 19, 0.15)",
                                            border: "1px solid #e30613"
                                        }}
                                    >
                                        <div style={serviceIconStyle}>IT</div>
                                        <div style={serviceNameStyle}>Technology Solutions</div>
                                    </motion.div>
                                </StaggeredItem>

                                <StaggeredItem index={1}>
                                    <motion.div
                                        style={serviceItemStyle}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: "0 10px 20px rgba(227, 6, 19, 0.15)",
                                            border: "1px solid #e30613"
                                        }}
                                    >
                                        <div style={serviceIconStyle}>SS</div>
                                        <div style={serviceNameStyle}>Security Seals</div>
                                    </motion.div>
                                </StaggeredItem>

                                <StaggeredItem index={2}>
                                    <motion.div
                                        style={serviceItemStyle}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: "0 10px 20px rgba(227, 6, 19, 0.15)",
                                            border: "1px solid #e30613"
                                        }}
                                    >
                                        <div style={serviceIconStyle}>AT</div>
                                        <div style={serviceNameStyle}>Account &amp; Tax</div>
                                    </motion.div>
                                </StaggeredItem>

                                <StaggeredItem index={3}>
                                    <motion.div
                                        style={serviceItemStyle}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: "0 10px 20px rgba(227, 6, 19, 0.15)",
                                            border: "1px solid #e30613"
                                        }}
                                    >
                                        <div style={serviceIconStyle}>BT</div>
                                        <div style={serviceNameStyle}>Biotechnology</div>
                                    </motion.div>
                                </StaggeredItem>
                            </motion.div>

                            <ScrollReveal>
                                <motion.a
                                    href="#"
                                    style={ctaButtonStyle}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 6px 15px rgba(227, 6, 19, 0.5)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Discover Our Solutions
                                </motion.a>
                            </ScrollReveal>
                        </div>
                    </div>
                </motion.div>

                {/*<div style={{*/}
                {/*    position: 'absolute',*/}
                {/*    bottom: '-100px',*/}
                {/*    right: '-100px',*/}
                {/*    width: '300px',*/}
                {/*    height: '300px',*/}
                {/*    background: 'rgba(227, 6, 19, 0.08)',*/}
                {/*    transform: 'rotate(45deg)',*/}
                {/*    zIndex: 1*/}
                {/*}}></div>*/}
            </div>

            {/* Services Section */}
            <CustomerServiceSection />

            {/* Hardware Product Section */}
            <HardwareProductSection />

        </>
    );
};
export default HeroCarousel;