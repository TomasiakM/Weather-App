import React from "react";

const Location = ({ weatherData }) => {
  return <p>{`${weatherData.name}, ${weatherData.country}`}</p>;
};

export default Location;
