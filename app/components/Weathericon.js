import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCloud, faSmog, faSnowflake, faSun, faUmbrella } from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon({weatherType}) {
    switch (weatherType) {
    case 'Clouds' : return <FontAwesomeIcon icon={faCloud} style={{color : 'lightskyblue'}}/>;
    case 'Clear' : return <FontAwesomeIcon icon={faSun} style={{color : 'yellow'}}/>;
    case 'Haze' : return <FontAwesomeIcon icon={faSmog} style={{color : 'darkgray'}} />;
    case 'Rain' : return <FontAwesomeIcon icon={faUmbrella} style={{color : 'blue'}}/>;
    case 'Thunderstorm' : return <FontAwesomeIcon icon={faBolt} style={{color : 'chocolate'}}/>;
    case 'Snow' : return <FontAwesomeIcon icon={faSnowflake} style={{color : 'whitesmoke'}}/>;
    default : return <FontAwesomeIcon icon={faCloud} />;
}
    
}