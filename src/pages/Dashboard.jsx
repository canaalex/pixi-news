import WeatherPanel from "../components/WeatherPanel";
import TopNewsPanel from "../components/TopNewsPanel";
import axios from "axios";
import React, { useState, useEffect } from "react";

const DashBoard = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("kochi");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e3766d46b3f062997e6b28af9020232e&units=metric`;
  const getData = () => {
    console.log("hi");
    axios.get(url).then((response) => {
      setData(response.data);
      console.log("checl", response.data);
    });
  };

  function getWeatherData(e) {
    if (e.key === "Enter") {
      console.log("hey");
      getData();
      setLocation("");
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex mt-10 gap-5 px-5">
      <TopNewsPanel />
      <WeatherPanel
        getWeatherData={getWeatherData}
        setData={setData}
        data={data}
        location={location}
        setLocation={setLocation}
      />
    </div>
  );
};

export default DashBoard;
