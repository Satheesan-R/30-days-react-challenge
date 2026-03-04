import React, { useState } from "react";
import ProfileCard from "./Day1ProfileCard/ProfileCard";
import LoginPage from "./Day2LoginPage/LoginPage";
import SignupPage from "./Day3SignupPage/SignupPage";
import "./App.css";

function App() {
  const [day, setDay] = useState(3); // change number to render different day

  const renderPage = () => {
    switch (day) {
      case 1: return <ProfileCard />;
      case 2: return <LoginPage />;
      case 3: return <SignupPage />;
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
      </div>
      {renderPage()}
    </div>
  );
}

export default App;