import React from "react";

const WindAndHumidity = ({ weatherData }) => {
  return (
    <>
      <p>Wiatr {weatherData.wind_kph} km/h</p>
      <p>Wilgotność {weatherData.humidity}%</p>
    </>
  );
};

export default WindAndHumidity;
