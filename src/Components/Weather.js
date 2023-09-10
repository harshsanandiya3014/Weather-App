import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./Weather.css";

function Weather() {
  const [City, setCity] = useState("Ahmedabad");
  const [Search, setSearch] = useState("Ahmedabad");

  useEffect(() => {
    fetchApi();
  }, [Search]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=98ad15010daeec642bb502d5c6bac2e6`;
  const fetchApi = async () => {
    const response = await fetch(url);
    // console.log(response);
    const jsondata = await response.json();
    setCity(jsondata.main);
    // console.log(jsondata);
  };

  const handlechange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <div className="body">
        <div className="main">
          <div className="input">
            <input type="text" onChange={handlechange} />
          </div>
          {!City ? (
            <p>NO DATA FOUND</p>
          ) : (
            <>
              <div className="location">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#3cb9b7" }}
                  className="icon"
                />
                <h1>{Search}</h1>
              </div>
              <div className="temp">{City.temp}°Cel</div>
              <div className="minmax">
                Min: {City.temp_min}°Cel | Max: {City.temp_max}°Cel
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;
