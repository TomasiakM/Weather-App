import React from "react";
import "./styles/Error.css";

function Form({ weatherData }) {
  return (
    <div className="error">
      <p>{weatherData.message}</p>
    </div>
  );
}

export default Form;
