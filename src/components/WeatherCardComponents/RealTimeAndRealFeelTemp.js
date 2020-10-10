import React from "react";

const RealTimeAndRealFeelTemp = ({ weatherData }) => {
  return (
    <>
      <p className="temp">{weatherData.temp_c}°C</p>
      <p className="realFeel">Odczuwalnie {weatherData.feelslike_c}°C</p>
    </>
  );
};

export default RealTimeAndRealFeelTemp;
