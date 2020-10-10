import React from "react";

const Image = ({ weatherData }) => {
  return (
    <>
      <p className="icon">
        <img src={weatherData.icon} alt={weatherData.text} />
      </p>
      <p>{weatherData.text}</p>
    </>
  );
};

export default Image;
