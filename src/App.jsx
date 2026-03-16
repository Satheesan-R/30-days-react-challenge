import React, { useState } from "react";
import ProfileCard from "./Day1ProfileCard/ProfileCard";
import LoginPage from "./Day2LoginPage/LoginPage";
import SignupPage from "./Day3SignupPage/SignupPage";
import LandingHero from "./Day4LandingPage/LandingHero";
import PricingTable from "./Day5PricingPage/PricingTable";
import AboutMe from "./Day6AboutmePage/aboutme";
import ContactForm from "./Day7ContactForm/Contactform";
import TodoList from "./Day8todolist/todolist";
import ProductGrid from "./Day9ProductGrid/Productgrid";
import BlogListPage from "./Day10Blog_ListPage/BlogListPage";
import Day11Testiomls from "./Day11Testiomls/Day11Testiomls";

import "./App.css";

function App() {
  const [day, setDay] = useState(11); // change number to render different day

  const renderPage = () => {
    switch (day) {
      case 1: return <ProfileCard />;
      case 2: return <LoginPage />;
      case 3: return <SignupPage />;
      case 4: return <LandingHero />;
      case 5: return <PricingTable />;
      case 6: return <AboutMe />;
      case 7: return <ContactForm />;
      case 8: return <TodoList />;
      case 9: return <ProductGrid />;
      case 10: return <BlogListPage />;
      case 11: return <Day11Testiomls />;
      default: return <ProfileCard />;
    }
  };

  return (
    <div className="app-shell">
      <div className="day-switcher">
        <button
          className={day === 1 ? "active" : ""}
          onClick={() => setDay(1)}
        >
          Day 1
        </button>
        <button
          className={day === 2 ? "active" : ""}
          onClick={() => setDay(2)}
        >
          Day 2
        </button>
        <button
          className={day === 3 ? "active" : ""}
          onClick={() => setDay(3)}
        >
          Day 3
        </button>
        <button
          className={day === 4 ? "active" : ""}
          onClick={() => setDay(4)}
        >
          Day 4
        </button>
        <button
          className={day === 5 ? "active" : ""}
          onClick={() => setDay(5)}
        >
          Day 5
        </button>
        <button
          className={day === 6 ? "active" : ""}
          onClick={() => setDay(6)}
        >
          Day 6
        </button>
        <button
          className={day === 7 ? "active" : ""}
          onClick={() => setDay(7)}
        >
          Day 7
        </button>
        <button
          className={day === 8 ? "active" : ""}
          onClick={() => setDay(8)}
        >
          Day 8
        </button>
        <button
          className={day === 9 ? "active" : ""}
          onClick={() => setDay(9)}
        >
          Day 9
        </button>
        <button
          className={day === 10 ? "active" : ""}
          onClick={() => setDay(10)}
        >
          Day 10
        </button>
        <button
          className={day === 11 ? "active" : ""}
          onClick={() => setDay(11)}
        >
          Day 11
        </button>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;