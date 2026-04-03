import React, { useState } from "react";
import "./faqpage.css";

const faqItems = [
  {
    question: "What is the 30 Days React Challenge?",
    answer:
      "It is a series of small, focused React pages designed to build consistency, improve component thinking, and practice UI implementation every day.",
  },
  {
    question: "How do I use this FAQ accordion?",
    answer:
      "Click any question to expand its answer. Clicking the same question again closes it, and opening another question automatically closes the current one.",
  },
  {
    question: "Can more than one answer stay open at once?",
    answer:
      "No. This layout is intentionally limited to one open item at a time so the page stays compact and easy to scan.",
  },
  {
    question: "Is this component mobile-friendly?",
    answer:
      "Yes. The layout uses responsive spacing and fluid widths so it stays readable on phones, tablets, and desktop screens.",
  },
  {
    question: "Can I reuse this pattern in other pages?",
    answer:
      "Yes. The accordion structure is reusable for FAQs, settings panels, onboarding steps, or any content that benefits from progressive disclosure.",
  },
];

export default function Day12FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index) => {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section className="faq-page">
      <header className="faq-header">
        <p className="faq-kicker">Day 12 Challenge</p>
        <h1 className="faq-title">FAQ Accordion</h1>
        <p className="faq-subtitle">
          A clean accordion interface with one question open at a time.
        </p>
      </header>

      <div className="faq-card" role="list">
        {faqItems.map((item, index) => {
          const isOpen = activeIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <article
              className={`faq-item ${isOpen ? "open" : ""}`}
              key={item.question}
              role="listitem"
            >
              <button
                id={buttonId}
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={panelId}
                className="faq-answer-wrap"
                role="region"
                aria-labelledby={buttonId}
              >
                <div className="faq-answer-inner">
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}