import './WeatherForecast.css'
import WeatherIcon from '../WeatherIcon/WeatherIcon.jsx'
import WeatherData from '../WeatherData/WeatherData.jsx'

function WeatherForecast(props) {
  return (
    <div className="weather">
      <h2>{props.day}</h2>
      <WeatherIcon src={props.img} alt={props.imgAlt}/>
      <WeatherData conditions={props.conditions} time={props.time}/>
      
    </div>
  )
}

export default WeatherForecast