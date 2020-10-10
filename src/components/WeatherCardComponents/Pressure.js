import React from "react";

const Pressure = ({ weatherData }) => {
  return <p>{weatherData.pressure_mb}hPa</p>;
};

export default Pressure;
