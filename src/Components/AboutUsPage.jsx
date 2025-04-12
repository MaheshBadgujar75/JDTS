import React from 'react';
import { ChevronRight, Phone, Target, Award, Users, Code, Monitor, BarChart, Shield, Database } from 'lucide-react';

function AboutUsPage() {
    const [activeService, setActiveService] = React.useState(null);

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

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '0', margin: '0', color: colors.textDark, overflowX: 'hidden' }}>
            {/* Hero Section */}
            <div style={{
                position: 'relative',
                textAlign: 'center',
                padding: '80px 20px',
                backgroundColor: colors.lightRed
            }}>
                <div>
                    <h1 style={{
                        fontSize: '46px',
                        marginBottom: '10px',
                        color: colors.primary,
                    }}>
                        ABOUT US
                    </h1>
                    <div style={{
                        height: '4px',
                        backgroundColor: colors.primary,
                        margin: '10px auto 20px',
                        width: '60px'
                    }}></div>
                    <h2 style={{
                        fontSize: '28px',
                        color: colors.textDark
                    }}>
                        JD TECH SOLUTION
                    </h2>
                    <p style={{
                        marginTop: '20px',
                        fontSize: '18px',
                        color: colors.textLight,
                        maxWidth: '700px',
                        margin: '20px auto'
                    }}>
                        We're here to provide you with a whole range of solutions to make your life easier.
                    </p>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                padding: '60px 20px',
                backgroundColor: colors.white,
                flexWrap: 'wrap'
            }}>
                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    maxWidth: '400px',
                    padding: '25px',
                    backgroundColor: colors.white,
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    border: `1px solid ${colors.lightRed}`
                }}>
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

                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    maxWidth: '400px',
                    padding: '25px',
                    backgroundColor: colors.white,
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    border: `1px solid ${colors.lightRed}`
                }}>
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
            <div style={{
                padding: '60px 20px',
                backgroundColor: colors.lightRed,
                textAlign: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'relative',
                    zIndex: 1
                }}>
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

            {/* Services Section */}
            <div style={{
                padding: '60px 20px',
                textAlign: 'center',
                backgroundColor: colors.white
            }}>
                <div>
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
                                position: 'relative'
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

            {/* 24/7 Support Banner */}
            <div style={{
                backgroundColor: colors.primary,
                color: colors.white,
                padding: '40px 20px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 1
                }}>
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

            {/* Call to Action */}
            <div style={{
                backgroundColor: colors.lightGray,
                padding: '80px 20px',
                textAlign: 'center'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
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