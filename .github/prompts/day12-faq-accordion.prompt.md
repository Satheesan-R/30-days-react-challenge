---
description: "Create or update the Day 12 React FAQ accordion page"
argument-hint: "FAQ topic, content focus, and any styling preferences"
agent: "agent"
---
Create or update the React FAQ page for this 30-day challenge project.

Use the existing day-page style as the reference, especially [src/Day10Blog_ListPage/BlogListPage.jsx](src/Day10Blog_ListPage/BlogListPage.jsx) and [src/Day11Testiomls/testiminols.jsx](src/Day11Testiomls/testiminols.jsx). Keep the result visually consistent with the rest of the series: clear day label, strong title, short supporting text, card-based layout, and polished spacing.

If the FAQ files already exist, update [src/Day12FAQ/faqpage.jsx](src/Day12FAQ/faqpage.jsx) and [src/Day12FAQ/faqpage.css](src/Day12FAQ/faqpage.css) instead of creating unrelated files.

Requirements:
- Build an accordion-style FAQ component.
- Clicking a question toggles its answer.
- Only one item can be open at a time.
- Add smooth open/close animation.
- Use modern, responsive styling.
- Prefer semantic buttons and accessible state with aria-expanded and aria-controls.
- Keep the component simple, readable, and aligned with the project’s naming/export conventions.

If the user did not provide FAQ content, generate 4 to 6 useful FAQ items that fit the project context.

After implementing, briefly summarize what was changed and mention any notable behavior.