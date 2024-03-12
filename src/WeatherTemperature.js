import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <h2 className="temperature"><strong>{Math.round(props.celsius)}</strong>
        <a href="/" className="ms-5">°C|</a>
        <a href="/" onClick={showFahrenheit}>°F</a>
        </h2>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="unit">
        <h2 className="temperature"><strong>{Math.round(fahrenheit)}</strong>
          <a href="/" onClick={showCelsius} className="ms-5">
            °C|</a>
          <a href="/" className="ms-1">°F</a>
        </h2>
      </div>
    );
  }
}
