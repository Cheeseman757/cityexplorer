import { useState } from 'react'
import axios from 'axios';


const API_KEY = import.meta.env.VITE_API_KEY;
const SERVER_LINK = import.meta.env.VITE_SERVER_LINK;
import Search from './Search.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultsGallery from './ResultsGallery.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import Header from './Header.jsx'
import Footer from './Footer.jsx';


function App() {
  const [cityResponseData, setCityResponseData] = useState({});
  const [weatherResponseData, setWeatherResponseData] = useState({});
  const [moviesResponseData, setMoviesResponseData] = useState({})
  const [city, setCity] = useState('');
  const [error, setError] = useState(null);

  
  const getLocationInfo = async (cityName) => {
    try {
      let cityResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${cityName}&format=json`);
      setCityResponseData(cityResponse.data[0]);
      console.log('Current API Server: ', SERVER_LINK)
      let weatherResponse = await axios.get(`${SERVER_LINK}/weather/${cityResponse.data[0].lat}_${cityResponse.data[0].lon}`);
      let moviesResponse = await axios.get(`${SERVER_LINK}/movies/${cityName}`)
      setWeatherResponseData(weatherResponse);
      setMoviesResponseData(moviesResponse);
      setError(null);
    } catch(error) {
      console.log(error);
      setError('Unable to get data for the entered location. Please check your input and try again.');
    }
  }

  return (
    <>
      <Header />
      <Search setCity={setCity} onSubmit={getLocationInfo} cityVar={city}/>
      <ErrorMessage error={error} />
      <ResultsGallery responses={[cityResponseData, weatherResponseData, moviesResponseData]} />
      <Footer />
    </>
  )
}

export default App;
