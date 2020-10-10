import React from "react";
import "./styles/WeatherCard.css";

//components
import Location from "./WeatherCardComponents/Location";
import Icon from "./WeatherCardComponents/Icon";
import RealTimeAndRealFeelTemp from "./WeatherCardComponents/RealTimeAndRealFeelTemp";
import WindAndHumidityNow from "./WeatherCardComponents/WindAndHumidityNow";
import Pressure from "./WeatherCardComponents/Pressure";

function WeatherCard({ weatherData }) {
  return (
    <div className="card">
      <Location weatherData={weatherData.location} />
      <Icon weatherData={weatherData.current.condition} />
      <RealTimeAndRealFeelTemp weatherData={weatherData.current} />
      <WindAndHumidityNow weatherData={weatherData.current} />
      <Pressure weatherData={weatherData.current} />
    </div>
  );
}

export default WeatherCard;
