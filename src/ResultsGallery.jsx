import CityMap from './CityMap.jsx';
import WeatherGallery from './WeatherGallery.jsx'
import MoviesGallery from './MoviesGallery.jsx'



function ResultsGallery(props) {
    return (
      <>
        {props.responses[0].display_name
        ? <>
          <CityMap cityData={props.responses[0]} />
          <WeatherGallery weatherData={props.responses[1]} />
          <MoviesGallery moviesData={props.responses[2]} />
        </>
        : <p> Please Click the Explore Button </p>
        }
      </>
    )
}

export default ResultsGallery;
