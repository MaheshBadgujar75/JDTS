import { useState, useEffect } from 'react';
import { ChevronRight, Phone, Target, Award, Users, Code, Monitor, BarChart, Shield, Database } from 'lucide-react';

function AboutUsPage() {
    const [animate, setAnimate] = useState(false);
    const [activeService, setActiveService] = useState(null);
    const [scrolledSections, setScrolledSections] = useState({});

    // Improved optimization with debounced scroll handler
    useEffect(() => {
        setAnimate(true);

        // Debounce function to limit how often scroll events fire
        function debounce(func, wait) {
            let timeout;
            return function () {
                const context = this;
                const args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        }

        // More efficient scroll handler
        const handleScroll = debounce(() => {
            const sections = document.querySelectorAll('.scroll-animate');
            const updated = { ...scrolledSections };
            let changed = false;

            sections.forEach(section => {
                const id = section.getAttribute('data-section');
                if (!scrolledSections[id]) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.85) {
                        updated[id] = true;
                        changed = true;
                    }
                }
            });

            if (changed) {
                setScrolledSections(updated);
            }
        }, 50);

        window.addEventListener('scroll', handleScroll);
        // Initial check
        setTimeout(handleScroll, 300);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolledSections]);

    // Simplified color palette
    const colors = {
        primary: '#e63946', // Bright red that's not too dark
        lightRed: '#f8d7da', // Very light red for backgrounds
        white: '#ffffff',
        lightGray: '#f8f9fa',
        textDark: '#343a40',
        textLight: '#6c757d'
    };

    const services = [
        { icon: <Code size={24} />, name: "Software Development" },
        { icon: <Monitor size={24} />, name: "Website Solutions" },
        { icon: <BarChart size={24} />, name: "Digital Marketing" },
        { icon: <Shield size={24} />, name: "Security Solutions" },
        { icon: <Database size={24} />, name: "IT Infrastructure" },
        { icon: <Users size={24} />, name: "Consulting" },
    ];

    // Essential optimized animations only
    const animationStyles = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .fade-in-left {
            opacity: 0;
            transform: translateX(-30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-left.visible {
            opacity: 1;
            transform: translateX(0);
        }
        .fade-in-right {
            opacity: 0;
            transform: translateX(30px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-right.visible {
            opacity: 1;
            transform: translateX(0);
        }
        .scale-in {
            opacity: 0;
            transform: scale(0.9);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scale-in.visible {
            opacity: 1;
            transform: scale(1);
        }
        @keyframes gentle-pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
        }
        .section-container {
            overflow: hidden;
        }
    `;

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '0', margin: '0', color: colors.textDark, overflowX: 'hidden' }}>
            <style>{animationStyles}</style>

            {/* Hero Section */}
            <div className="section-container" style={{
                position: 'relative',
                textAlign: 'center',
                padding: '80px 20px',
                backgroundColor: colors.lightRed
            }}>
                <div className={`fade-in ${animate ? 'visible' : ''}`} style={{
                    transitionDelay: '0.2s'
                }}>
                    <h1 style={{
                        fontSize: '46px',
                        marginBottom: '10px',
                        color: colors.primary,
                    }}>
                        ABOUT US
                    </h1>
                    <div style={{
                        width: '60px',
                        height: '4px',
                        backgroundColor: colors.primary,
                        margin: '10px auto 20px',
                        transition: 'width 0.8s ease-out',
                        width: animate ? '60px' : '0px'
                    }}></div>
                    <h2 style={{
                        fontSize: '28px',
                        color: colors.textDark,
                        transitionDelay: '0.4s'
                    }} className={`fade-in ${animate ? 'visible' : ''}`}>
                        JD TECH SOLUTION
                    </h2>
                    <p style={{
                        marginTop: '20px',
                        fontSize: '18px',
                        color: colors.textLight,
                        maxWidth: '700px',
                        margin: '20px auto',
                        transitionDelay: '0.6s'
                    }} className={`fade-in ${animate ? 'visible' : ''}`}>
                        We're here to provide you with a whole range of solutions to make your life easier.
                    </p>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="section-container" style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                padding: '60px 20px',
                backgroundColor: colors.white,
                flexWrap: 'wrap'
            }}>
                <div
                    className={`fade-in-left scroll-animate ${scrolledSections['mission'] ? 'visible' : ''}`}
                    data-section="mission"
                    style={{
                        flex: '1',
                        minWidth: '300px',
                        maxWidth: '400px',
                        padding: '25px',
                        backgroundColor: colors.white,
                        borderRadius: '10px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        border: `1px solid ${colors.lightRed}`
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <div style={{
                            backgroundColor: `${colors.primary}15`,
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px'
                        }}>
                            <Target size={24} color={colors.primary} />
                        </div>
                        <h3 style={{ fontSize: '22px', color: colors.primary }}>Our Vision</h3>
                    </div>
                    <p style={{ color: colors.textLight, lineHeight: '1.6' }}>
                        To simplify your life through innovative solutions that make a difference.
                    </p>
                </div>

                <div
                    className={`fade-in-right scroll-animate ${scrolledSections['vision'] ? 'visible' : ''}`}
                    data-section="vision"
                    style={{
                        flex: '1',
                        minWidth: '300px',
                        maxWidth: '400px',
                        padding: '25px',
                        backgroundColor: colors.white,
                        borderRadius: '10px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        border: `1px solid ${colors.lightRed}`
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <div style={{
                            backgroundColor: `${colors.primary}15`,
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '15px'
                        }}>
                            <Award size={24} color={colors.primary} />
                        </div>
                        <h3 style={{ fontSize: '22px', color: colors.primary }}>Our Mission</h3>
                    </div>
                    <p style={{ color: colors.textLight, lineHeight: '1.6' }}>
                        To provide top-notch products and services that meet your needs and exceed your expectations. At JD Tech Solution, we're not just about business – we're about building relationships and making a positive impact.
                    </p>
                </div>
            </div>

            {/* Company History */}
            <div className="section-container" style={{
                padding: '60px 20px',
                backgroundColor: colors.lightRed,
                textAlign: 'center',
                position: 'relative',
            }}>
                <div
                    className={`scale-in scroll-animate ${scrolledSections['journey'] ? 'visible' : ''}`}
                    data-section="journey"
                    style={{
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    <h2 style={{
                        fontSize: '32px',
                        color: colors.primary,
                        position: 'relative',
                        display: 'inline-block'
                    }}>
                        Our Journey
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            height: '4px',
                            width: '60px',
                            backgroundColor: colors.primary
                        }}></div>
                    </h2>

                    <div style={{
                        maxWidth: '800px',
                        margin: '40px auto 0',
                        fontSize: '18px',
                        color: colors.textLight,
                        backgroundColor: colors.white,
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}>
                        <p style={{ marginBottom: '20px', lineHeight: '1.7' }}>
                            JD Group has been a key player since 2016, with a wide range of business interests. From IT to security seals, and from accounting to biotechnology, we've been in the game for a while now, gaining valuable experience in supply and distribution along the way.
                        </p>
                        <p style={{ marginBottom: '20px', lineHeight: '1.7' }}>
                            JDCODE is one of our flagship solutions, brought to you by JD Tech Solution, which is part of JD Group.
                        </p>
                        <div style={{
                            fontStyle: 'italic',
                            color: colors.textDark,
                            backgroundColor: colors.white,
                            padding: '15px',
                            borderLeft: `4px solid ${colors.primary}`,
                            textAlign: 'left',
                            borderRadius: '0 5px 5px 0'
                        }}>
                            Behind it all is Mr. Jatin Gandhi, our visionary leader, guiding us towards our mission and vision.
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section - Optimized */}
            <div className="section-container" style={{
                padding: '60px 20px',
                textAlign: 'center',
                backgroundColor: colors.white
            }}>
                <div
                    className={`scale-in scroll-animate ${scrolledSections['solutions-title'] ? 'visible' : ''}`}
                    data-section="solutions-title"
                >
                    <h2 style={{
                        fontSize: '32px',
                        color: colors.primary,
                        display: 'inline-block',
                        position: 'relative',
                        marginBottom: '40px'
                    }}>
                        Our Solutions
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            height: '4px',
                            width: '60px',
                            backgroundColor: colors.primary
                        }}></div>
                    </h2>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '25px',
                    margin: '20px auto',
                    maxWidth: '1200px'
                }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`fade-in scroll-animate ${scrolledSections[`service-${index}`] ? 'visible' : ''}`}
                            data-section={`service-${index}`}
                            style={{
                                width: '250px',
                                height: '200px',
                                padding: '25px 20px',
                                border: `1px solid ${colors.lightRed}`,
                                borderRadius: '10px',
                                backgroundColor: activeService === index ? `${colors.primary}08` : colors.white,
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                position: 'relative',
                                transitionDelay: `${0.1 * index}s`
                            }}
                            onMouseEnter={() => setActiveService(index)}
                            onMouseLeave={() => setActiveService(null)}
                        >
                            <div style={{
                                marginBottom: '20px',
                                color: colors.primary,
                                backgroundColor: `${colors.primary}15`,
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'transform 0.3s ease',
                                transform: activeService === index ? 'scale(1.1)' : 'scale(1)'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{
                                fontSize: '20px',
                                marginBottom: '15px',
                                position: 'relative'
                            }}>
                                {service.name}
                                <div style={{
                                    height: '3px',
                                    backgroundColor: colors.primary,
                                    margin: '8px auto 0',
                                    transition: 'width 0.3s ease',
                                    width: activeService === index ? '60px' : '40px'
                                }}></div>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* 24/7 Support Banner - Simplified */}
            <div className="section-container" style={{
                backgroundColor: colors.primary,
                color: colors.white,
                padding: '40px 20px'
            }}>
                <div
                    className={`fade-in scroll-animate ${scrolledSections['support'] ? 'visible' : ''}`}
                    data-section="support"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        flexWrap: 'wrap',
                        position: 'relative',
                        zIndex: 1
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '20px'
                        }}>
                            <Phone size={28} />
                        </div>
                        <div>
                            <h3 style={{ margin: '0', fontSize: '24px' }}>24/7 Helpline</h3>
                            <p style={{ margin: '5px 0 0', fontSize: '16px', opacity: 0.9 }}>We are always there to help you anytime 24/7</p>
                        </div>
                    </div>
                    <button style={{
                        marginTop: '20px',
                        backgroundColor: colors.white,
                        color: colors.primary,
                        border: 'none',
                        padding: '12px 25px',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                    }}>
                        Contact Us <ChevronRight size={20} style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>

            {/* Call to Action - Optimized */}
            <div className="section-container" style={{
                backgroundColor: colors.lightGray,
                padding: '80px 20px',
                textAlign: 'center'
            }}>
                <div
                    className={`scale-in scroll-animate ${scrolledSections['cta'] ? 'visible' : ''}`}
                    data-section="cta"
                    style={{
                        maxWidth: '800px',
                        margin: '0 auto'
                    }}
                >
                    <h2 style={{
                        fontSize: '36px',
                        color: colors.primary,
                        marginBottom: '30px'
                    }}>Join Us On This Journey</h2>
                    <p style={{
                        fontSize: '18px',
                        color: colors.textLight,
                        lineHeight: '1.7',
                        marginBottom: '40px'
                    }}>
                        Let's create a better future together. Discover how JD Tech Solution can transform your business today.
                    </p>
                    <button style={{
                        backgroundColor: colors.primary,
                        color: colors.white,
                        border: 'none',
                        padding: '15px 40px',
                        fontSize: '18px',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 5px 20px rgba(230, 57, 70, 0.3)'
                    }}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;