import React from "react";

const RainAndHumidity = ({ weatherData }) => {
  return (
    <>
      <p>
        Szansa na opady{" "}
        {weatherData.daily_chance_of_rain > 0
          ? weatherData.daily_chance_of_rain
          : weatherData.daily_chance_of_snow > 0
          ? weatherData.daily_chance_of_snow
          : "0"}
        %
      </p>
    </>
  );
};

export default RainAndHumidity;
