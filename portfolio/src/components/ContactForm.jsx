import React, { useState } from 'react';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Merci pour votre message. Je vous contacterais rapidement.');
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    };

    return (
        <div id='contact-section' className="contact-container">

            <form onSubmit={handleSubmit} className="contact-form">
                <h2>Contactez-moi</h2>
                <div className="form-container">

                    <div className="form-row">

                        <div className="form-input">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Nom"
                            />
                        </div>
                        <div className="form-input">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Téléphone"
                            />
                        </div>
                    </div>
                    <div className="form-input">

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-input">

                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Message"
                        />
                    </div>
                    <button type="submit" className="submit-btn">Envoyer</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;