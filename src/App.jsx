import React, { useState } from "react";
import ProfileCard from "./Day1ProfileCard/ProfileCard";
import LoginPage from "./Day2LoginPage/LoginPage";
import SignupPage from "./Day3SignupPage/SignupPage";

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
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setDay(1)}>Day 1</button>
        <button onClick={() => setDay(2)}>Day 2</button>
        <button onClick={() => setDay(3)}>Day 3</button>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;