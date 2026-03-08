import React, { useState } from "react";
import "./Contactform.css";

const initialForm = {
	name: "",
	email: "",
	subject: "",
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
		<section className="contact-page">
			<div className="contact-shell">
				<header className="page-header card">
					<h1>Contact Us</h1>
					<p className="subtitle">
						Have a question or want to work together? Send us a message.
					</p>
					<p className="intro-text">
						We would love to hear from you. If you have any questions, suggestions,
						or collaboration opportunities, please feel free to reach out using the
						contact form below. We will get back to you as soon as possible.
					</p>
				</header>

				<div className="main-grid">
					<aside className="contact-info card">
						<h2>Contact Information</h2>
						<div className="info-list">
							<div className="info-item">
								<span className="icon-badge">L</span>
								<div>
									<h3>Location</h3>
									<p>Colombo, Sri Lanka</p>
								</div>
							</div>
							<div className="info-item">
								<span className="icon-badge">E</span>
								<div>
									<h3>Email</h3>
									<p>satheesan@email.com</p>
								</div>
							</div>
							<div className="info-item">
								<span className="icon-badge">P</span>
								<div>
									<h3>Phone</h3>
									<p>+94 77 123 4567</p>
								</div>
							</div>
						</div>

						<div className="social-links">
							<h3>Follow Us</h3>
							<div className="social-list">
								<a href="#" aria-label="GitHub">
									GitHub
								</a>
								<a href="#" aria-label="LinkedIn">
									LinkedIn
								</a>
								<a href="#" aria-label="Twitter">
									Twitter
								</a>
							</div>
						</div>
					</aside>

					<div className="form-and-location">
						<section className="form-card card">
							<h2>Send Us a Message</h2>
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

								<label htmlFor="subject">Subject</label>
								<input
									id="subject"
									name="subject"
									type="text"
									value={formData.subject}
									onChange={handleChange}
									placeholder="What is this about?"
									required
								/>

								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									rows="6"
									value={formData.message}
									onChange={handleChange}
									placeholder="Write your message"
									required
								/>

								<button type="submit">Send Message</button>
							</form>

							{isSubmitted && (
								<p className="success-message">
									Your message has been sent successfully! We will contact you soon.
								</p>
							)}
						</section>

						<section className="location-card card">
							<h2>Our Location</h2>
							<p>Our Location - Colombo, Sri Lanka</p>
							<div className="map-placeholder">Map Placeholder</div>
						</section>
					</div>
				</div>

				<section className="cta card">
					<p>Let&apos;s build something amazing together. Send us a message today!</p>
				</section>
			</div>
		</section>
	);
};

export default ContactForm;
