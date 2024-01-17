import EyeIcon from "../assets/icons/EyeIcon.jsx";
import TemperatureIcon from "../assets/icons/TemperatureIcon";
import HumidityIcon from "../assets/icons/HumidityIcon";
import WindIcon from "../assets/icons/WindIcon";
import { getDayAndDate, capitalizeFirstLetter } from "../utils/common";
import SearchIcon from "../assets/icons/SearchIcon";

const WeatherPanel = ({ getWeatherData, setLocation, data, location }) => {
  return (
    <div className="p-4 h-3/4 md:p-6 w-full md:w-4/12 bg-black flex justify-center align-middle rounded-3xl bg-opacity-20 backdrop-blur-xl drop-shadow-lg text-white font-light">
      <div className="flex flex-col">
        <div className="relative w-36 xl:w-64">
          <input
            className="text-white w-full h-10 pl-8 pr-4 rounded-lg bg-black transition-all duration-300"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={getWeatherData}
          />
          <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none">
            <SearchIcon width={20} height={20} />
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 mt-4">
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
            <div className="font-semibold text-xl md:text-2xl">
              {data.name}, {data.sys ? data.sys.country : null}
            </div>
            <div className="font-normal text-lg md:text-lg">
              {data.timezone && data.dt ? getDayAndDate(data) : null}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-0 md:mt-3">
          <div className="flex flex-col">
            <div className="text-8xl xl:text-144 font-light flex">
              <span>{data.main ? data.main.temp : 0}</span>
              <span className="text-xl md:text-2xl font-light mt-2 md:mt-14">
                &deg;C
              </span>
            </div>
            <div className="font-normal text-lg text-center mt-0 md:mt-5">
              {data.weather
                ? capitalizeFirstLetter(data.weather[0].description)
                : ""}
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10 md:mb-5 md:mt-10 grid grid-cols-2 gap-4 md:gap-5">
          <div className="flex text-base md:text-lg font-normal">
            <div className="flex">
              <EyeIcon
                width={23}
                height={25}
                className="md:w-8 md:h-8 text-white"
              />
              <div className="min-w-12 md:min-w-20 ml-1">Visibility</div>
              <div className="min-w-12 md:min-w-18 ml-1">
                {data.visibility ? data.visibility : 0}
              </div>
            </div>
          </div>
          <div className="flex text-base md:text-lg font-normal">
            <div className="flex">
              <TemperatureIcon
                width={25}
                height={25}
                className="md:w-8 md:h-8 text-white"
              />
              <div className="min-w-12 md:min-w-20 ml-1">
                Feels<span className="hidden md:inline"> Like</span>
              </div>
              <div className="min-w-12 md:min-w-18ml-1">
                {data.main ? `${data.main.feels_like} °C` : 0}
              </div>
            </div>
          </div>
          <div className="flex text-base md:text-lg font-normal">
            <div className="flex">
              <HumidityIcon width={25} height={25} className="md:w-8 md:h-8" />
              <div className="min-w-12 md:min-w-20 ml-1">Humidity</div>
              <div className="min-w-12 md:min-w-18 ml-1">
                {data.main ? `${data.main.humidity} %` : 0}
              </div>
            </div>
          </div>
          <div className="flex text-base md:text-lg font-normal">
            <div className="flex">
              <WindIcon width={25} height={25} className="md:w-8 md:h-8" />
              <div className="min-w-12 md:min-w-20 ml-1">Wind</div>
              <div className="min-w-12 md:min-w-18 ml-1">
                {data.wind ? `${data.wind.speed} MPS` : 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPanel;
