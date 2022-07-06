import React from "react";
import "./App.css";

//components
import CardBlock from "./components/CardBlock/CardBlock";
import Intro from "./components/Intro/Intro";
import SocialIcons from "./components/SocialIcons/SocialIcons";
// import DateInput from "./components/DateInput/DateInput";

function App() {
  return (
    <div className="App">
      <div className="BgStars">
        <Intro />
        <CardBlock />
        {/* <DateInput /> */}
      </div>
      <div className="Hills">
        <SocialIcons />
      </div>
    </div>
  );
}

export default App;
