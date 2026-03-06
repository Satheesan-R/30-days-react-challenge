import React from "react";
import "./PricingTable.css";

const plans = [
	{
		name: "Starter",
		price: "$9",
		period: "/month",
		description: "Great for beginners building small projects.",
		features: ["1 Project", "Basic Components", "Email Support"],
		cta: "Choose Starter",
		featured: false,
	},
	{
		name: "Pro",
		price: "$29",
		period: "/month",
		description: "Perfect for developers creating production-ready apps.",
		features: ["10 Projects", "Premium Templates", "Priority Support"],
		cta: "Choose Pro",
		featured: true,
	},
	{
		name: "Team",
		price: "$79",
		period: "/month",
		description: "Built for teams shipping products together.",
		features: ["Unlimited Projects", "Team Collaboration", "24/7 Support"],
		cta: "Choose Team",
		featured: false,
	},
];

const PricingTable = () => {
	return (
		<section className="pricing-wrapper">
			<div className="pricing-card">
				<header className="pricing-header">
					<p>Day 5 React Challenge</p>
					<h1>Simple Pricing for Every Stage</h1>
					<span>Pick a plan and scale your project with confidence.</span>
				</header>

				<div className="pricing-grid">
					{plans.map((plan) => (
						<article
							key={plan.name}
							className={`plan-card ${plan.featured ? "featured" : ""}`}
						>
							{plan.featured && <div className="badge">Most Popular</div>}
							<h2>{plan.name}</h2>
							<p className="price-row">
								<strong>{plan.price}</strong>
								<span>{plan.period}</span>
							</p>
							<p className="plan-description">{plan.description}</p>

							<ul>
								{plan.features.map((feature) => (
									<li key={feature}>{feature}</li>
								))}
							</ul>

							<button type="button">{plan.cta}</button>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default PricingTable;
