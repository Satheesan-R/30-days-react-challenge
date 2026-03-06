import React from "react";
import "./LandingHero.css";

const features = [
	"Fast React-based UI",
	"Clean and modern layout",
	"Mobile-friendly design",
];

const LandingHero = () => {
	return (
		<section className="landing-wrapper">
			<div className="landing-card">
				<header className="landing-nav">
					<h2>Day4Brand</h2>
					<nav>
						<a href="#features">Features</a>
						<a href="#about">About</a>
						<a href="#contact">Contact</a>
					</nav>
					<button type="button">Get Started</button>
				</header>

				<div className="landing-content">
					<div className="landing-left">
						<p className="tag">Day 4 React Challenge</p>
						<h1>Build Beautiful Landing Pages with Confidence</h1>
						<p className="subtitle">
							Create modern and responsive interfaces faster using reusable React components and clean CSS structure.
						</p>

						<div className="action-row">
							<button type="button" className="primary">
								Start Free
							</button>
							<button type="button" className="secondary">
								View Demo
							</button>
						</div>

						<ul className="feature-list" id="features">
							{features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</div>

					<div className="landing-right" aria-label="Decorative product preview">
						<div className="mockup-box">
							<div className="mockup-top" />
							<div className="mockup-mid" />
							<div className="mockup-bottom" />
						</div>

						<div className="stats-row">
							<article>
								<h3>12K+</h3>
								<p>Users</p>
							</article>
							<article>
								<h3>98%</h3>
								<p>Satisfaction</p>
							</article>
							<article>
								<h3>24/7</h3>
								<p>Support</p>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingHero;
