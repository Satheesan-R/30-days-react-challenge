import React, { useState } from "react";
import "./Contactform.css";

const initialForm = {
	name: "",
	email: "",
	message: "",
};

const ContactForm = () => {
	const [formData, setFormData] = useState(initialForm);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitted(true);
		setFormData(initialForm);
	};

	return (
		<section className="contact-wrapper">
			<div className="contact-card">
				<header className="contact-header">
					<p>Day 7 React Challenge</p>
					<h1>Contact Form</h1>
				</header>

				<form className="contact-form" onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input
						id="name"
						name="name"
						type="text"
						value={formData.name}
						onChange={handleChange}
						placeholder="Enter your name"
						required
					/>

					<label htmlFor="email">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Enter your email"
						required
					/>

					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						rows="5"
						value={formData.message}
						onChange={handleChange}
						placeholder="Write your message"
						required
					/>

					<button type="submit">Send Message</button>
				</form>

				{isSubmitted && (
					<p className="success-message">Your message has been submitted successfully.</p>
				)}
			</div>
		</section>
	);
};

export default ContactForm;
