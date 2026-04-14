import React from "react";
import "./membercard.css";

const teamMembers = [
	{
		id: 1,
		name: "Aarav Sharma",
		role: "Frontend Developer",
		photo:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		id: 2,
		name: "Isha Verma",
		role: "UI Designer",
		photo:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		id: 3,
		name: "Rohan Nair",
		role: "Backend Engineer",
		photo:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		id: 4,
		name: "Meera Patel",
		role: "Product Manager",
		photo:
			"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		id: 5,
		name: "Kabir Singh",
		role: "QA Engineer",
		photo:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
	{
		id: 6,
		name: "Ananya Rao",
		role: "Mobile Developer",
		photo:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
		social: {
			linkedin: "#",
			twitter: "#",
			github: "#",
		},
	},
];

export default function Day13MemberCard() {
	return (
		<section className="member-page">
			<div className="member-page-head">
				<p className="member-kicker">Day 13 Challenge</p>
				<h1 className="member-title">Team Members Grid</h1>
				<p className="member-subtitle">
					A responsive card grid with profile photos, roles, and social links.
				</p>
			</div>

			<div className="member-grid">
				{teamMembers.map((member) => (
					<article className="member-card" key={member.id}>
						<img
							src={member.photo}
							alt={`${member.name} portrait`}
							className="member-photo"
						/>
						<div className="member-content">
							<h2 className="member-name">{member.name}</h2>
							<p className="member-role">{member.role}</p>
							<div className="member-socials" aria-label={`${member.name} social links`}>
								<a href={member.social.linkedin} className="social-btn" aria-label="LinkedIn">
									IN
								</a>
								<a href={member.social.twitter} className="social-btn" aria-label="Twitter">
									X
								</a>
								<a href={member.social.github} className="social-btn" aria-label="GitHub">
									GH
								</a>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
