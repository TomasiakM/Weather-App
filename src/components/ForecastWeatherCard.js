import React from "react";

//Components
import DayInfo from "./WeatherCardComponents/DayInfo";
import Image from "./WeatherCardComponents/Icon";
import MaxMinTemp from "./WeatherCardComponents/MaxMinTemp";
import RainfallChance from "./WeatherCardComponents/RainfallChance";
import WindAndHumidity from "./WeatherCardComponents/WindAndHumidity";

const ForecastWeatherCard = ({ weatherData }) => {
  return (
    <div className="card">
      <DayInfo weatherData={weatherData.date} />
      <Image weatherData={weatherData.day.condition} />
      <MaxMinTemp weatherData={weatherData.day} />
      <RainfallChance weatherData={weatherData.day} />
      <WindAndHumidity weatherData={weatherData.day} />
    </div>
  );
};

export default ForecastWeatherCard;
