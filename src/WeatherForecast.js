import React from "react";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  const apiKey = "15b046dc320ab53a013bbof2tfa365eb";
  let city = props.data.city;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

  Axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>thu </div>
          <div>
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="ForecastIcon"
            />
          </div>
          <div className="WeatherForecastTemperatures">
            <span className="WeatherForecastTemperatureMax">18°</span>
            <span className="WeatherForecastTemperatureMin">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
