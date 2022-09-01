import { useState, useEffect } from "react";
import Search from "./weather-components/search/search";
import CurrentWeather from "./weather-components/current-weather/current-weather";
// import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./index.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast, setForecast] = useState(null);

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  //TODO: Need initial setup function that if long and lat exists, to display your location, else allow your user to enter a city for display
// on Load -> IF Lat && Long, run API search with Lat, Long
//            ELSE wait for onSearchChange to GET Lat, Long from user
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // const forecastFetch = fetch(
    //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );



    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        // const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        // setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div style={{ minHeight:"0" }} className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* {forecast && <Forecast data={forecast} />} */}
    </div>
  );
}

export default App;
