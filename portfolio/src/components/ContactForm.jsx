import React, { useState } from 'react';
import emailjs from 'emailjs-com';



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

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(formData.email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }

        emailjs.send(
            'service_n72d0gp',
            'template_61pr11k',
            {
                from_name: formData.name,
                phone: formData.phone,
                from_email: formData.email,
                message: formData.message,
            },
            'R0Lho5QKQ7Yt-i8Mr'
        )
        console.log('Form submitted:', formData);
        alert('Merci pour votre message. Je vous contacterai rapidement.');
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
                            <label htmlFor="name" className="hidden-label">Nom</label>
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
                            <label htmlFor="phone" className="hidden-label">Phone</label>
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
                        <label htmlFor="email" className="hidden-label">Email</label>
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
                        <label htmlFor="message" className="hidden-label">Message</label>
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