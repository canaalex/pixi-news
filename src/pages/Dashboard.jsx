import WeatherPanel from "../components/WeatherPanel";
import TopNewsPanel from "../components/TopNewsPanel";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DashBoard = () => {
  const [data, setData] = useState({});
  const [newsData, setNewsData] = useState({});
  const [searchWord, setSearchWord] = useState("Top News");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [location, setLocation] = useState("Kochi");
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e3766d46b3f062997e6b28af9020232e&units=metric`;
  const newsUrl = `https://newsapi.org/v2/everything?q=${searchWord}&sortBy=publishedAt&apiKey=575a7602a51748a2b9a8c5b80f01b105&language=${selectedLanguage}`;
  const getData = () => {
    axios.get(weatherUrl).then((response) => {
      setData(response.data);
    });
  };
  const getNewsData = () => {
    axios.get(newsUrl).then((response) => {
      setNewsData(response.data);
    });
  };

  function getWeatherData(e) {
    if (e.key === "Enter") {
      getData();
      setLocation("");
    }
  }
  function handleNews(e) {
    if (e.key === "Enter") {
      getNewsData();
      setSearchWord("");
    }
  }
  function handleSelectedLanguage(e) {
    setSelectedLanguage(e.target.value);
  }
  useEffect(() => {
    getData();
    getNewsData();
  }, []);

  useEffect(() => {
    if (!!searchWord) {
      getNewsData();
    }
  }, [selectedLanguage]);

  return (
    <>
      <Header />
      <div className="flex gap-5 mt-10 px-5 flex-col md:flex-row pb-10">
        <TopNewsPanel
          handleNews={handleNews}
          newsData={newsData}
          searchWord={searchWord}
          selectedLanguage={selectedLanguage}
          handleSelectedLanguage={handleSelectedLanguage}
          setSearchWord={setSearchWord}
        />
        <WeatherPanel
          getWeatherData={getWeatherData}
          data={data}
          location={location}
          setLocation={setLocation}
        />
      </div>
      <Footer />
    </>
  );
};

export default DashBoard;
