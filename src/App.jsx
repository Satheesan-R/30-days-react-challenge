import React, { useState } from "react";
import ProfileCard from "./Day1ProfileCard/ProfileCard";
import LoginPage from "./Day2LoginPage/LoginPage";
import SignupPage from "./Day3SignupPage/SignupPage";
import LandingHero from "./Day4LandingPage/LandingHero";
import PricingTable from "./Day5PricingPage/PricingTable";
import AboutMe from "./Day6AboutmePage/aboutme";
import "./App.css";

function App() {
  const [day, setDay] = useState(6); // change number to render different day

  const renderPage = () => {
    switch (day) {
      case 1: return <ProfileCard />;
      case 2: return <LoginPage />;
      case 3: return <SignupPage />;
      case 4: return <LandingHero />;
      case 5: return <PricingTable />;
      case 6: return <AboutMe />;
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
      </div>
      {renderPage()}
    </div>
  );
}

export default App;