import WeatherIcon from "./Weathericon";
import styles from "../page.module.css";

export default function WeatherCard({city, weatherType, currentTemp, highTemp, lowTemp, cloudiness, humidity, windspeed}) {
    return (
    <div> 
        <h2>{city}</h2>
        <div className={styles.icon} style={{ background: cloudiness === 0 
            ? 'white' 
            : `linear-gradient(to right, gray ${cloudiness * 1.5}%, white)`  }}>
            <WeatherIcon weatherType={weatherType} />
        </div>
        <p>Current Temperature : {currentTemp} °C</p>
        <p>High Temperature : {highTemp} °C</p>
        <p>Low Temperature : {lowTemp} °C</p>
        <p>Cloudiness : {cloudiness} %</p>
        <p>Humidity : {humidity} %</p>
        <p>Wind Speed : {windspeed} m/s</p>
        
    </div>
    );
}