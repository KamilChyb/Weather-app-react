import React from "react";
import "./Result.css";

const Result = props => {
  const {
    err,
    city,
    date,
    sunrise,
    sunset,
    temp,
    pressure,
    wind
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <h3>
          Search results for: <em>{city}</em>
        </h3>
        <h4>Date and time: {date}</h4>
        <h4>Temperature: {temp} &#176;C</h4>
        <h4>Sunrise: {sunriseTime}</h4>
        <h4>Sunset: {sunsetTime}</h4>
        <h4>Wind: {wind} m/s</h4>
        <h4>Pressure: {pressure} hPa</h4>
      </>
    );
  }

  return (
    <div className="result">{err ? `Not in database: ${city}` : content}</div>
  );
};

export default Result;
