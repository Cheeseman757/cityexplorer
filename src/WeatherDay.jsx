import { Card } from 'react-bootstrap'

function WeatherDay(props) {
    return (
        <Card style={{ padding: '10px', margin: '10px 0'}}>
            <Card.Body>
                <Card.Title>{props.data.date}</Card.Title>
                <Card.Text>High: {props.data.high}</Card.Text>
                <Card.Text>Low: {props.data.low}</Card.Text>
                <Card.Text>{props.data.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default WeatherDay;
