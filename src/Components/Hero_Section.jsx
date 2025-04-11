import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Headphones, Package, SmileIcon, FileText, Users } from 'lucide-react';
import '../Css/hero_section.css'; // Import your CSS file for styling

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

                <div style={{
                    position: 'absolute',
                    bottom: '-100px',
                    right: '-100px',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(227, 6, 19, 0.08)',
                    transform: 'rotate(45deg)',
                    zIndex: 1
                }}></div>
            </div>

            {/* Services Section */}
            <CustomerServiceSection />
        </>
    );
};

// Services Section Component

const CustomerServiceSection = () => {
    // Refs for animation elements
    const scrollAnimationRefs = useRef([]);
    const counterRefs = useRef([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Mark component as loaded for initial animations
        setIsLoaded(true);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.2 });

        // Observe all elements with scroll-animation class
        scrollAnimationRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        // Counter animation function
        const startCounterAnimation = (counter, target) => {
            const duration = 2000; // ms
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    if (counter) counter.textContent = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    if (counter) counter.textContent = target;
                }
            };

            updateCounter();
        };

        // Counter observer
        const counterObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                const counter = entries[0].target;
                const target = parseInt(counter.getAttribute('data-target'));
                startCounterAnimation(counter, target);
                counterObserver.unobserve(counter);
            }
        }, { threshold: 0.5 });

        // Observe counter elements
        counterRefs.current.forEach(el => {
            if (el) counterObserver.observe(el);
        });

        // Cleanup
        return () => {
            observer.disconnect();
            counterObserver.disconnect();
        };
    }, []);

    // Add elements to refs
    const addToScrollAnimationRefs = (el) => {
        if (el && !scrollAnimationRefs.current.includes(el)) {
            scrollAnimationRefs.current.push(el);
        }
    };

    const addToCounterRefs = (el) => {
        if (el && !counterRefs.current.includes(el)) {
            counterRefs.current.push(el);
        }
    };

    return (
        <div className={`container ${isLoaded ? 'loaded' : ''}`}>
            <style jsx>{` 
        .container {
          width: 100%;
          margin: 0 auto;
          padding: 50px 20px;
          background-color: #fff;
          position: relative;
          overflow: hidden;
        }

        .container::before {
          content: "";
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,0,0,0.05) 0%, rgba(255,255,255,0) 70%);
          top: -200px;
          right: -200px;
          z-index: 0;
        }

        .container::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,0,0,0.05) 0%, rgba(255,255,255,0) 70%);
          bottom: -200px;
          left: -200px;
          z-index: 0;
        }
        
        .services-section {
          display: flex;
          flex-direction: column;
          gap: 100px;
          position: relative;
          z-index: 1;
        }
        
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          position: relative;
        }
        
        .hero-content {
          flex: 1;
          position: relative;
        }

        .hero-content::before {
          content: "";
          position: absolute;
          width: 80px;
          height: 80px;
          border: 6px solid rgba(255, 0, 0, 0.1);
          border-radius: 12px;
          top: -40px;
          left: -40px;
          z-index: -1;
          animation: rotateSquare 20s linear infinite;
        }
        
        .hero-image {
          flex: 1;
          position: relative;
          background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 
            0 20px 40px rgba(255, 0, 0, 0.2),
            0 0 0 2px rgba(255, 255, 255, 0.8) inset;
          overflow: hidden;
          transform: perspective(1000px) rotateY(-5deg);
          transition: all 0.5s ease;
        }

        .hero-image:hover {
          transform: perspective(1000px) rotateY(0deg);
          box-shadow: 
            0 30px 60px rgba(255, 0, 0, 0.3),
            0 0 0 4px rgba(255, 255, 255, 0.9) inset;
        }
        
        .hero-image img {
          width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 10px 15px rgba(0,0,0,0.2));
          transform: translateY(0);
          transition: all 0.5s ease;
          border-radius: 20px;
        }

        .hero-image:hover img {
          transform: translateY(-10px);
        }
        
        .circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          z-index: 1;
          backdrop-filter: blur(4px);
        }
        
        .circle-1 {
          width: 120px;
          height: 120px;
          top: -30px;
          left: 20%;
          animation: float 8s ease-in-out infinite;
        }
        
        .circle-2 {
          width: 80px;
          height: 80px;
          bottom: 40px;
          right: 15%;
          animation: float 6s ease-in-out infinite 1s;
        }
        
        .circle-3 {
          width: 60px;
          height: 60px;
          top: 50%;
          left: 10%;
          animation: float 7s ease-in-out infinite 0.5s;
        }
        
        .blob {
          position: absolute;
          z-index: 0;
          opacity: 0.2;
          filter: blur(50px);
          background: #ff0000;
        }
        
        .blob-1 {
          width: 400px;
          height: 400px;
          top: -200px;
          left: -200px;
          border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          animation: morph 15s linear infinite;
          background: linear-gradient(45deg, #ff0000, #ff3333);
        }
        
        .blob-2 {
          width: 350px;
          height: 350px;
          bottom: -150px;
          right: -100px;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: morph 12s linear infinite reverse;
          background: linear-gradient(45deg, #cc0000, #ff0000);
        }
        
        h1 {
          font-size: 56px;
          font-weight: 800;
          color: #e60000;
          margin-bottom: 25px;
          position: relative;
          display: inline-block;
          text-shadow: 2px 2px 0 rgba(255,0,0,0.1);
        }
        
        h1::after {
          content: "";
          position: absolute;
          width: 70%;
          height: 8px;
          background: linear-gradient(90deg, #ff0000, transparent);
          bottom: -10px;
          left: 0;
          border-radius: 4px;
        }
        
        p {
          font-size: 18px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 30px;
          position: relative;
        }

        p::before {
          content: "";
          position: absolute;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, #ff0000, transparent);
          left: -20px;
          border-radius: 3px;
        }
        
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-top: 60px;
          position: relative;
        }

        .features::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,0,0,0.3), transparent);
          top: -30px;
        }

        .features::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,0,0,0.3), transparent);
          bottom: -30px;
        }
        
        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.05),
            0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border: 1px solid rgba(255, 0, 0, 0.1);
          z-index: 1;
        }
        
        .feature-card:hover {
          transform: translateY(-16px);
          box-shadow: 
            0 30px 60px rgba(255, 0, 0, 0.15),
            0 0 15px rgba(255, 0, 0, 0.1);
          border-color: rgba(255, 0, 0, 0.5);
        }
        
        .feature-card::before {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          width: 150%;
          height: 150%;
          background: linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
          transition: all 0.8s ease;
          transform: rotate(45deg);
          z-index: -1;
        }
        
        .feature-card:hover::before {
          top: 100%;
          left: 100%;
        }

        .feature-card::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 20px;
          bottom: 0;
          left: 0;
          background: linear-gradient(to top, rgba(255,0,0,0.05), transparent);
          transition: all 0.5s ease;
          opacity: 0;
        }

        .feature-card:hover::after {
          height: 100%;
          opacity: 1;
        }
        
        .icon {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
          color: white;
          border-radius: 50%;
          margin-bottom: 25px;
          font-size: 32px;
          position: relative;
          transition: all 0.5s ease;
          border: 4px solid rgba(255,255,255,0.8);
          box-shadow: 0 10px 20px rgba(255,0,0,0.2);
        }
        
        .feature-card:hover .icon {
          transform: scale(1.1) translateY(-10px);
          box-shadow: 0 15px 30px rgba(255,0,0,0.3);
        }
        
        .icon svg {
          width: 40px;
          height: 40px;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,0.2));
          transition: all 0.5s ease;
        }

        .feature-card:hover .icon svg {
          transform: scale(1.1);
        }
        
        .icon::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
          opacity: 0.4;
          z-index: -1;
          animation: pulse 2s infinite;
        }
        
        .feature-title {
          font-size: 24px;
          font-weight: 700;
          color: #e60000;
          margin-bottom: 20px;
          position: relative;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-title {
          transform: translateY(-5px);
          text-shadow: 0 2px 5px rgba(255,0,0,0.1);
        }

        .feature-title::after {
          content: "";
          position: absolute;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #ff0000, transparent);
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-title::after {
          width: 60px;
        }
        
        .feature-desc {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-desc {
          color: #333;
        }
        
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 80px;
          position: relative;
          background: linear-gradient(135deg, rgba(255,0,0,0.03) 0%, rgba(255,255,255,0) 100%);
          border-radius: 20px;
          padding: 40px 20px;
          border: 1px solid rgba(255,0,0,0.1);
        }

        .stats::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 20px;
          background: radial-gradient(circle at center, rgba(255,0,0,0.03) 0%, rgba(255,255,255,0) 70%);
        }
        
        .stat-card {
          text-align: center;
          padding: 30px;
          position: relative;
          transition: all 0.5s ease;
          border-radius: 15px;
          backdrop-filter: blur(3px);
        }

        .stat-card:hover {
          background: rgba(255,255,255,0.7);
          box-shadow: 0 10px 30px rgba(255,0,0,0.1);
          transform: translateY(-10px);
        }
        
        .stat-icon {
          color: #e60000;
          font-size: 32px;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }

        .stat-icon::after {
          content: "";
          position: absolute;
          width: 40px;
          height: 40px;
          background: rgba(255,0,0,0.1);
          border-radius: 50%;
          z-index: -1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 3s infinite;
        }
        
        .stat-number {
          font-size: 56px;
          font-weight: 800;
          color: #e60000;
          margin-bottom: 15px;
          transition: all 0.5s ease;
          text-shadow: 2px 2px 0 rgba(255,0,0,0.1);
          position: relative;
          background: linear-gradient(to right, #cc0000, #ff0000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .stat-card:hover .stat-number {
          transform: translateY(-8px) scale(1.05);
        }
        
        .stat-label {
          font-size: 18px;
          color: #555;
          font-weight: 600;
          position: relative;
          padding-bottom: 10px;
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-label {
          color: #333;
        }

        .stat-label::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 2px;
          background: linear-gradient(90deg, #ff0000, transparent);
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-label::after {
          width: 50px;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes morph {
          0%, 100% {
            border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
          }
          25% {
            border-radius: 50% 50% 30% 70% / 30% 30% 70% 70%;
          }
          50% {
            border-radius: 30% 70% 70% 30% / 30% 50% 50% 70%;
          }
          75% {
            border-radius: 66% 34% 50% 50% / 50% 30% 70% 30%;
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @keyframes rotateSquare {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .scroll-animation {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        
        .scroll-animation.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .counter {
          display: inline-block;
        }

        /* Initial load animation */
        .container {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }

        .container.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        /* Red "accent" lines */
        .accent-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #ff0000, transparent);
          height: 2px;
          width: 20%;
          opacity: 0.2;
          z-index: 0;
        }

        .accent-line-1 {
          top: 10%;
          left: -10%;
          width: 30%;
          transform: rotate(-25deg);
        }

        .accent-line-2 {
          bottom: 20%;
          right: -5%;
          width: 25%;
          transform: rotate(15deg);
        }

        .accent-line-3 {
          top: 50%;
          left: 15%;
          width: 15%;
          transform: rotate(45deg);
        }

        /* Ribbon corner effect for hero */
        .ribbon {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 120px;
          height: 120px;
          overflow: hidden;
          z-index: 3;
        }

        .ribbon::before,
        .ribbon::after {
          position: absolute;
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          background: #990000;
          z-index: -1;
        }

        .ribbon::before {
          top: 0;
          right: 0;
        }

        .ribbon::after {
          bottom: 0;
          left: 0;
        }

        .ribbon-content {
          position: absolute;
          width: 150px;
          height: 40px;
          background: #e60000;
          top: 30px;
          right: -35px;
          z-index: 4;
          transform: rotate(45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 14px;
          box-shadow: 0 5px 10px rgba(0,0,0,0.15);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>

            {/* Red accent lines for visual interest */}
            <div className="accent-line accent-line-1"></div>
            <div className="accent-line accent-line-2"></div>
            <div className="accent-line accent-line-3"></div>

            <div className="services-section">
                {/* Hero Section */}
                <div className="hero scroll-animation" ref={addToScrollAnimationRefs}>
                    <div className="hero-content">
                        <h1>Best Services</h1>
                        <p>We believe serving better is the great way to survive in market and having good relationship with client. Our dedicated team ensures you receive exceptional solutions tailored to your business needs.</p>
                    </div>
                    <div className="hero-image">
                        <div className="ribbon">
                            <div className="ribbon-content">Premium</div>
                        </div>
                        <img src="/ServiceImage.jpg" alt="Customer service illustration" />
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                        <div className="circle circle-3"></div>
                    </div>
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>

                {/* Features */}
                <div className="features">
                    <div className="feature-card scroll-animation" ref={addToScrollAnimationRefs} style={{ transitionDelay: '0.2s' }}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="feature-title">24/7 Helpline</h3>
                        <p className="feature-desc">We are always there to help you anytime 24/7. Our team is ready to assist with any inquiries or issues that arise.</p>
                    </div>

                    <div className="feature-card scroll-animation" ref={addToScrollAnimationRefs} style={{ transitionDelay: '0.4s' }}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="feature-title">Complete Package</h3>
                        <p className="feature-desc">We are complete package of whatever you need. Software, Website, Barcoding related products and more solutions.</p>
                    </div>

                    <div className="feature-card scroll-animation" ref={addToScrollAnimationRefs} style={{ transitionDelay: '0.6s' }}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="feature-title">Quality Assurance</h3>
                        <p className="feature-desc">Our dedicated team ensures all deliverables meet the highest standards of quality and performance.</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="stats scroll-animation" ref={addToScrollAnimationRefs} style={{ transitionDelay: '0.8s' }}>
                    <div className="stat-card">
                        <div className="stat-icon">😊</div>
                        <div
                            className="stat-number counter"
                            data-target="232"
                            ref={addToCounterRefs}
                        >
                            0
                        </div>
                        <div className="stat-label">Happy Clients</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">📋</div>
                        <div
                            className="stat-number counter"
                            data-target="521"
                            ref={addToCounterRefs}
                        >
                            0
                        </div>
                        <div className="stat-label">Projects</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">🎧</div>
                        <div
                            className="stat-number counter"
                            data-target="999"
                            ref={addToCounterRefs}
                        >
                            0
                        </div>
                        <div className="stat-label">Support</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">👥</div>
                        <div
                            className="stat-number counter"
                            data-target="15"
                            ref={addToCounterRefs}
                        >
                            0
                        </div>
                        <div className="stat-label">Hard Workers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default HeroCarousel;