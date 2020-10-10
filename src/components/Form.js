import React, { useEffect, useRef, useState } from "react";
import { Input } from "semantic-ui-react";
import "./styles/form.css";

function Form({ weatherData, setWeatherData }) {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(false);

  const cityName = useRef("");

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(query)
        .then((response) => response.json())
        .then((result) => {
          setWeatherData(result);
        });
      setLoading(false);
    }
  }, [query]);

  const handleInputChange = (e) => {
    cityName.current = e.target.value;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    function conventer(name) {
      return name
        .replace(/ą/g, "a")
        .replace(/Ą/g, "A")
        .replace(/ć/g, "c")
        .replace(/Ć/g, "C")
        .replace(/ę/g, "e")
        .replace(/Ę/g, "E")
        .replace(/ł/g, "l")
        .replace(/Ł/g, "L")
        .replace(/ń/g, "n")
        .replace(/Ń/g, "N")
        .replace(/ó/g, "o")
        .replace(/Ó/g, "O")
        .replace(/ś/g, "s")
        .replace(/Ś/g, "S")
        .replace(/ż/g, "z")
        .replace(/Ż/g, "Z")
        .replace(/ź/g, "z")
        .replace(/Ź/g, "Z");
    }
    if (typeof cityName.current == "string") {
      setQuery(
        `https://api.weatherapi.com/v1/forecast.json?key=a6426e75f22c4707927135113201309&q=${conventer(
          cityName.current
        )}&lang=pl&days=10`
      );
    }
  };

  return (
    <div className="form">
      <form onSubmit={formSubmit}>
        <Input
          ref={cityName}
          size="large"
          action={{
            color: "yellow",
            content: "Sprawdź",
            loading: loading ? true : false,
          }}
          onChange={handleInputChange}
          placeholder="Wpisz miasto"
        />
        {weatherData ? "" : console.log(weatherData.location.name)}
      </form>
    </div>
  );
}

export default Form;
