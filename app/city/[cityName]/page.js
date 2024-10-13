import styles from "../../page.module.css";
import WeatherCard from "../../components/WeatherCard";

export default async function City({params}) {
    const city = params.cityName;

    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;

const request = await fetch(queryURL);
const weatherData = await request.json();

console.log(weatherData);

if(!weatherData) return null;


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WeatherCard city={city} weatherType={weatherData.weather[0].main} currentTemp={weatherData.main.temp} highTemp={weatherData.main.temp_max} lowTemp={weatherData.main.temp_min}  cloudiness={weatherData.clouds.all} humidity={weatherData.main.humidity} windspeed={weatherData.wind.speed}/>
        </main>
        </div>
  );
}