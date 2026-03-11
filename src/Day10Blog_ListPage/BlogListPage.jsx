import React, { useMemo, useState } from "react";
import "./BlogListPage.css";

const initialBlogs = [
	{
		id: 1,
		title: "How to Build Better React Components",
		summary:
			"A practical guide to writing cleaner, reusable components with clear props, small responsibilities, and better composition patterns.",
		date: "March 10, 2026",
		category: "React",
	},
	{
		id: 2,
		title: "State Management Without Overthinking",
		summary:
			"Learn when local state is enough, when to lift state, and how to avoid introducing global state too early in a project.",
		date: "March 8, 2026",
		category: "Frontend",
	},
	{
		id: 3,
		title: "CSS Layout Tricks for Responsive Pages",
		summary:
			"Use grid, flexbox, and spacing systems together to create layouts that look polished on desktop, tablet, and mobile.",
		date: "March 6, 2026",
		category: "CSS",
	},
	{
		id: 4,
		title: "Debugging JavaScript in Real Projects",
		summary:
			"A simple workflow for finding bugs faster with breakpoints, network inspection, and clear logging strategies.",
		date: "March 4, 2026",
		category: "JavaScript",
	},
	{
		id: 5,
		title: "From Mockup to Production UI",
		summary:
			"Step-by-step ideas for turning static designs into accessible, maintainable UI components that scale with your app.",
		date: "March 2, 2026",
		category: "UI/UX",
	},
];

const BlogListPage = () => {
	const [blogs] = useState(initialBlogs);
	const [searchText, setSearchText] = useState("");

	const filteredBlogs = useMemo(() => {
		return blogs.filter((blog) => {
			const term = searchText.toLowerCase();
			return (
				blog.title.toLowerCase().includes(term) ||
				blog.summary.toLowerCase().includes(term) ||
				blog.category.toLowerCase().includes(term)
			);
		});
	}, [blogs, searchText]);

	return (
		<section className="blog-page">
			<header className="blog-header">
				<p className="blog-kicker">Day 10 Challenge</p>
				<h1 className="blog-title">Blog List Page</h1>
				<p className="blog-subtitle">
					Browse latest posts with title, summary, and publish date.
				</p>

				<input
					type="text"
					className="blog-search"
					placeholder="Search by title, summary, or category..."
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</header>

			<div className="blog-grid">
				{filteredBlogs.length === 0 ? (
					<p className="blog-empty">No blog posts found for this search.</p>
				) : (
					filteredBlogs.map((blog) => (
						<article className="blog-card" key={blog.id}>
							<div className="blog-meta">
								<span className="blog-category">{blog.category}</span>
								<time className="blog-date">{blog.date}</time>
							</div>

							<h2 className="blog-card-title">{blog.title}</h2>
							<p className="blog-summary">{blog.summary}</p>
						</article>
					))
				)}
			</div>
		</section>
	);
};

export default BlogListPage;
