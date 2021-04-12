import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>

          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>

          <div className="col-1">
            <button type="button" class="btns">
              📍
            </button>
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Last Updated: Sunday 11:35</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt="Cloudy"
              className="float-left"
            />
            <span className="temperature">6</span>
            <span className="unit">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
