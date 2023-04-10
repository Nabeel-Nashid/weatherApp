import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0de1dcbcc0b8d0a293a156c5fd2f662e`;
  // const tz = `https://api.ipgeolocation.io/timezone?apiKey=5c6c9f99bc9f4881ab94c387d9e31633&tz=America/Los_Angeles`;


  const searchBar = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log("url", response.data);
      });
      setLocation("");
    }
  };

  return (
    <div>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={searchBar}
            placeholder="Enter Location"
            type="text"
          />
        </div>

        <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>

            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          <div className="bottom">
            <div className="feels">
              Feels like
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
              ) : null}
            </div>
            <div className="humidity">
              Humidity
              {data.main ? (
                <p className="bold">{data.main.humidity}%</p>
              ) : null}{" "}
            </div>
            <div className="wind">
              Wind Speed
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
