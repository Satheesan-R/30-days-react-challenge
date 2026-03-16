import React, { useEffect, useState } from "react";
import "./testiminols.css";

const testimonials = [
  {
    quote:
      "This React challenge helped me build consistency. Small wins every day!",
    name: "Aarav Mehta",
    role: "Frontend Learner",
  },
  {
    quote:
      "I finally understand component thinking and reusable UI patterns now.",
    name: "Nisha Kapoor",
    role: "UI Developer",
  },
  {
    quote:
      "Daily projects made my portfolio stronger and confidence much higher.",
    name: "Rahul Verma",
    role: "CS Student",
  },
  {
    quote:
      "The best part is practical learning — less theory, more working code.",
    name: "Sneha Iyer",
    role: "React Enthusiast",
  },
];

export default function Day11Testiomls() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () =>
    setActiveIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="day11-wrap">
      <h2 className="day11-title">Day 11 - Testimonials</h2>
      <p className="day11-subtitle">Carousel with quotes and names</p>

      <div className="carousel-card">
        <p className="quote-mark">“</p>
        <p className="quote-text">{testimonials[activeIndex].quote}</p>
        <h4 className="author-name">{testimonials[activeIndex].name}</h4>
        <span className="author-role">{testimonials[activeIndex].role}</span>

        <div className="controls">
          <button onClick={prev} className="nav-btn" aria-label="Previous">
            ←
          </button>
          <div className="dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="nav-btn" aria-label="Next">
            →
          </button>
        </div>
      </div>
    </div>
  );
}