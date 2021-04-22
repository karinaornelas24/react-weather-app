import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          Coded by Ana Karina Ornelas, open-sourced on{" "}
          <a
            href="<https://github.com/karinaornelas24/react-weather-app"
            target="_blank"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
