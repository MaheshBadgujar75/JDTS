import React, { useState } from 'react';
import '../Css/ContactUsPage.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Basic Validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            setLoading(false);
            return;
        }

        try {
            // Create form data for submission
            const form = new FormData();
            form.append('name', formData.name);
            form.append('email', formData.email);
            form.append('message', formData.message);

            // Convert form data to a URL-encoded string
            const formDataUrlEncoded = new URLSearchParams(form).toString();

            await fetch('https://script.google.com/macros/s/AKfycbwfd9OoCCLJdmE4zPq1VuYwRlKp8S2qlUd3oy_EnIU/dev', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formDataUrlEncoded,
            });

            // Since we can't access the response with no-cors,
            // we assume it worked if no exception was thrown
            alert('Message sent successfully!');

            // Clear form after submit
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('Something went wrong. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-card">

                {/* Left Section */}
                <div className="contact-left">
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="contact-subtitle">We'd love to hear from you. Send us a message and we'll get back to you shortly!</p>
                    <div className="contact-info">
                        <div>
                            <h4 className="contact-info-title">Address</h4>
                            <p>Karanjade, India</p>
                        </div>
                        <div>
                            <h4 className="contact-info-title">Phone</h4>
                            <p>+1 234 567 890</p>
                        </div>
                        <div>
                            <h4 className="contact-info-title">Email</h4>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="contact-right">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="contact-label">Name</label>
                            <input
                                id="name"
                                type="text"
                                className="contact-input"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="contact-label">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="contact-input"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="contact-label">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="contact-textarea"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="contact-button" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;