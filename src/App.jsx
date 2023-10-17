import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./component/searchBar";
import ForeCast from "./component/foreCast";
import FiveDayforecast from './component/fiveDayforeCast'
function App() {
  const [cityName, setcityName] = useState('mumbai');
  const [forecast, setforecast] = useState([]);
  const [weather, setweather] = useState([]);
  const querry = cityName;
  const appId = "9c03715633e50dfd1056abc22be2e1b9";
  const units = "metric";

  const updateForecastdata = async () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${querry}&appid=${appId}&units=${units}`)
        .then(response => response.json())
        .then(data =>{
          setforecast(data);
          
        })
        .catch(()=>{
         console.log(`City Not Found`);

        })

  }
  const updateWeatherdata = async () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${querry}&appid=${appId}&units=${units}`)
        .then(response => response.json())
        .then(data =>{
          setweather(data);
          
        })
        .catch(()=>{
          console.log(`City Not Found`)
        })

  }
useEffect(()=>{
  updateForecastdata();
  updateWeatherdata();
},[cityName])




  return (
    <div className="">
      <SearchBar setcityName={setcityName} />
      <FiveDayforecast forecastData={forecast} />
      <ForeCast forecastData={forecast} WeatherData={weather} />
    
    </div>
  );
}

export default App;
