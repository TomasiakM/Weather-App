import React from "react";

const DayInfo = ({ weatherData }) => {
  const getDay = () => {
    const days = [
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
      "Niedziela",
    ];
    let date = weatherData;
    let day = new Date(date).getDay();
    day = days[day];
    return day;
  };

  return (
    <>
      <p>{getDay()}</p>
      <p>{weatherData}</p>
    </>
  );
};

export default DayInfo;
