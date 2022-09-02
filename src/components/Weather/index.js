import { useState, useEffect } from "react";
import Search from "./weather-components/search/search";
import CurrentWeather from "./weather-components/current-weather/current-weather";
// import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./index.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast, setForecast] = useState(null);

  const [lats, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    await fetch(`${WEATHER_API_URL}/weather?lat=${lats}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)
    .then(res => res.json() )
    .then(result => {
      setData(result);
      const is400 = result.cod === '400';
      const hasWeather = result?.weather?.length || null;
      if (!is400 && hasWeather) {
        setCurrentWeather({ city: result.name, ...result });
      }
    });
  }
  fetchData();
    console.log("Latitude is:", lats)
    console.log("Longitude is:", long)
  }, [lats, long]);

  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // const forecastFetch = fetch(
    //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );

    // const currentWeatherFetch = fetch(
    //   `${WEATHER_API_URL}/weather?lat=${lats}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    // );



    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        // const forcastResponse = await response[1].json();
        console.log(weatherResponse);

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        // setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="weather-container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* {forecast && <Forecast data={forecast} />} */}
    </div>
  );
}


export default App;
