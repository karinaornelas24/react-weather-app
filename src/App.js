import React from "react";
import Weather from "./Weather";
import "./App.css";

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
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
