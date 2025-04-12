import React, { useRef, useState, useEffect } from 'react';
import { FaSmileBeam, FaClipboardList, FaHeadphonesAlt, FaUsers } from 'react-icons/fa';
import { BadgeHelp, PackageCheck, ShieldCheck } from "lucide-react";
import "../Css/CustomerServiceSection.css"

const CustomerServiceSection = () => {
    // Refs for animation elements
    const scrollAnimationRefs = useRef([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // State for counters
    const [counters, setCounters] = useState({
        clients: 0,
        projects: 0,
        support: 0,
        workers: 0
    });

    // Final counter values
    const finalCounters = {
        clients: 250,
        projects: 230,
        support: 5000,
        workers: 15
    };

    useEffect(() => {
        // Mark component as loaded for initial animations
        setIsLoaded(true);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');

                    // Start counters when stats section becomes visible
                    if (entry.target.classList.contains('stats')) {
                        startCounters();
                    }
                }
            });
        }, { threshold: 0.2 });

        // Observe all elements with scroll-animation class
        scrollAnimationRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        // Cleanup
        return () => {
            observer.disconnect();
        };
    }, []);

    // Function to start counters animation
    const startCounters = () => {
        const duration = 2000; // Total animation duration in ms
        const steps = 50; // Number of steps
        const interval = duration / steps;

        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;

            if (currentStep >= steps) {
                setCounters({
                    clients: finalCounters.clients,
                    projects: finalCounters.projects,
                    support: finalCounters.support,
                    workers: finalCounters.workers
                });
                clearInterval(timer);
            } else {
                const progress = currentStep / steps;
                setCounters({
                    clients: Math.ceil(progress * finalCounters.clients),
                    projects: Math.ceil(progress * finalCounters.projects),
                    support: Math.ceil(progress * finalCounters.support),
                    workers: Math.ceil(progress * finalCounters.workers)
                });
            }
        }, interval);
    };

    // Add elements to refs
    const addToScrollAnimationRefs = (el) => {
        if (el && !scrollAnimationRefs.current.includes(el)) {
            scrollAnimationRefs.current.push(el);
        }
    };

    return (
        <div className={`page-container ${isLoaded ? 'loaded' : ''}`}>
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
                </div>

                {/* Features */}
                <div className="features">
                    <div className="feature-card scroll-animation" ref={addToScrollAnimationRefs} style={{ transitionDelay: '0.2s' }}>
                        <div className="icon">
                            <BadgeHelp className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="feature-title">24/7 Helpline</h3>
                        <p className="feature-desc">
                            We are always there to help you anytime 24/7. Our team is ready to assist with any inquiries or issues that arise.
                        </p>
                    </div>

                    <div className="feature-card scroll-animation" ref={addToScrollAnimationRefs} style={{ transitionDelay: '0.4s' }}>
                        <div className="icon">
                            <PackageCheck className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="feature-title">Complete Package</h3>
                        <p className="feature-desc">
                            We are complete package of whatever you need. Software, Website, Barcoding related products and more solutions.
                        </p>
                    </div>

                    <div className="feature-card scroll-animation" ref={addToScrollAnimationRefs} style={{ transitionDelay: '0.6s' }}>
                        <div className="icon">
                            <ShieldCheck className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="feature-title">Data Privacy</h3>
                        <p className="feature-desc">
                            Your privacy is our utmost priority. We maintain high standards to protect your data securely and reliably.
                        </p>
                    </div>
                </div>

                {/* Stats with counters */}
                <div
                    className="stats scroll-animation"
                    ref={addToScrollAnimationRefs}
                    style={{ transitionDelay: '0.8s' }}
                >
                    <div className="stat-card">
                        <div className="stat-icon">
                            <FaSmileBeam size={40} color="#ff6b6b" />
                        </div>
                        <div className="stat-number">
                            {counters.clients}+
                        </div>
                        <div className="stat-label">Happy Clients</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">
                            <FaClipboardList size={40} color="#6c5ce7" />
                        </div>
                        <div className="stat-number">
                            {counters.projects}
                        </div>
                        <div className="stat-label">Projects</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">
                            <FaHeadphonesAlt size={40} color="#00cec9" />
                        </div>
                        <div className="stat-number">
                            {counters.support}+
                        </div>
                        <div className="stat-label">Support</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon">
                            <FaUsers size={40} color="#fd79a8" />
                        </div>
                        <div className="stat-number">
                            {counters.workers}
                        </div>
                        <div className="stat-label">Hard Workers</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerServiceSection;