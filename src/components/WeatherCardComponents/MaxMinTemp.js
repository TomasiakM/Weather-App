import React from "react";

const MaxMinTemp = ({ weatherData }) => {
  return (
    <>
      <p>
        {weatherData.mintemp_c}°C - {weatherData.maxtemp_c}°C
      </p>
    </>
  );
};

export default MaxMinTemp;
