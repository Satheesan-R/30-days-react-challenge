import React from "react";
import "./aboutme.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "GitHub"];

const journey = [
	{
		year: "2024",
		title: "Started Web Development",
		description: "Learned basics of web UI and responsive design.",
	},
	{
		year: "2025",
		title: "Built React Projects",
		description: "Created challenge pages and improved component structure.",
	},
	{
		year: "2026",
		title: "Growing as Full-Stack Developer",
		description: "Practicing microservices and modern app development.",
	},
];

const AboutMe = () => {
	return (
		<section className="about-wrapper">
			<div className="about-card">
				<header className="about-header">
					<p>Day 6 React Challenge</p>
					<h1>About Me</h1>
				</header>

				<div className="profile-section">
					<img
						src={process.env.PUBLIC_URL + "/IMG00098.JPG.jpeg"}
						alt="Rajasekar Satheesan"
					/>
					<div>
						<h2>Rajasekar Satheesan</h2>
						<p>
							I am a React-focused developer who enjoys building simple,
							responsive, and user-friendly web pages.
						</p>
					</div>
				</div>

				<section className="skills-section">
					<h3>Skills</h3>
					<ul>
						{skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</section>

				<section className="timeline-section">
					<h3>Journey</h3>
					<div className="timeline-list">
						{journey.map((item) => (
							<article key={item.year} className="timeline-item">
								<span>{item.year}</span>
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</section>

				<footer className="about-footer">Thanks for visiting my About Me page.</footer>
			</div>
		</section>
	);
};

export default AboutMe;
