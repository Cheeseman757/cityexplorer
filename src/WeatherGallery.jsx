import {Container, Row} from 'react-bootstrap';
import WeatherDay from './WeatherDay.jsx'

function WeatherGallery(props) {
    return (
        <>
            <h3 style={{ padding: '20px' }}> 6-Day Weather Forecast </h3>
            <Container>
              <Row xs={1} sm={2} md={3} lg={3} >
                {props.weatherData?.data?.map((day, idx) => <WeatherDay key={idx} data={day} /> )};
              </Row>
            </Container>
        </>
    )
}

export default WeatherGallery;
