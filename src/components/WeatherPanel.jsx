import eyeIcon from "../assets/icons/eyeIcon.svg";
import temperatureIcon from "../assets/icons/temperatureIcon.svg";
import humidityIcon from "../assets/icons/humidityIcon.svg";
import windIcon from "../assets/icons/windIcon.svg";
import { getDayAndDate, capitalizeFirstLetter } from "../utils/common";

const WeatherPanel = ({
  getWeatherData,
  setData,
  setLocation,
  data,
  location,
  searchLocation,
}) => {
  return (
    <div className="p-10 bg-black flex justify-center align-middle rounded-3xl bg-opacity-20 backdrop-blur-xl drop-shadow-lg text-white font-light">
      <div className="flex flex-col">
        <input
          className="text-black"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={getWeatherData}
        />
        <div className="flex gap-4">
          <img
            className="h-20 w-auto"
            src={
              data.weather
                ? `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
                : null
            }
            alt="weather"
          />

          <div className="flex flex-col">
            <div className="font-semibold text-2xl">
              {data.name}, {data.sys ? data.sys.country : null}
            </div>
            <div className="font-normal text-lg">
              {data.timezone && data.dt ? getDayAndDate(data) : null}
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex flex-col">
            <div className="text-144 font-light flex">
              <span>{data.main ? data.main.temp : 0}</span>
              <span className="text-2xl font-light mt-14">&deg;C</span>
            </div>
            <div className="font-normal text-lg text-center">
              {data.weather
                ? capitalizeFirstLetter(data.weather[0].description)
                : ""}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex text-lg font-normal">
            <div className="flex">
              <img src={eyeIcon} alt="eye" />
              <div className="w-20 ml-1">Visibility</div>
              <div className="w-16 ml-1">
                {data.visibility ? data.visibility : 0}
              </div>
            </div>
            <div className="mx-7" />
            <div className="flex">
              <img src={temperatureIcon} alt="temperature" />
              <div className="w-20 ml-1">Feels Like</div>
              <div className="w-16 ml-1">
                {data.main ? data.main.feels_like : 0}
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex text-lg font-normal mt-6">
            <div className="flex">
              <img src={humidityIcon} alt="humidity" />
              <div className="w-20 ml-1">Humidity</div>
              <div className="w-16 ml-1">
                {data.main ? data.main.humidity : 0}
              </div>
            </div>
            <div className="mx-7" />
            <div className="flex">
              <img src={windIcon} alt="wind" />
              <div className="w-20 ml-1">Wind</div>
              <div className="w-16 ml-1">{data.wind ? data.wind.speed : 0}</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPanel;
