import React from "react";

const WindAndHumidity = ({ weatherData }) => {
  return (
    <>
      <p>Wiatr {weatherData.maxwind_kph} km/h</p>
      <p>Wilgotność {weatherData.avghumidity}%</p>
    </>
  );
};

export default WindAndHumidity;
