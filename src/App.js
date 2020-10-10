import React, { useState } from "react";
import "./App.css";

//Components
import Form from "./components/Form";
import TodayWeatherCard from "./components/TodayWeatherCard";
import ForecastWeatherCard from "./components/ForecastWeatherCard";
import Error from "./components/Error";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  return (
    <div className="App">
      <Form weatherData={weatherData} setWeatherData={setWeatherData} />
      <div className="weatherIcons">
        {weatherData.location && (
          <div className="cards">
            <TodayWeatherCard weatherData={weatherData} />
            <div className="forecastCards">
              {weatherData.forecast.forecastday.map((el) => {
                return (
                  <ForecastWeatherCard weatherData={el} key={el.date_epoch} />
                );
              })}
            </div>
          </div>
        )}
      </div>
      {weatherData.error && <Error weatherData={weatherData.error} />}
    </div>
  );
}

export default App;
