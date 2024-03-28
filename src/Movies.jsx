
import { Card } from 'react-bootstrap'

function Movies(props) {
    return (
        <Card style={{ padding: '20px', width: '80vw' }}>
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text>Release Date: {props.data.date}</Card.Text>
                <Card.Text>{props.data.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Movies;
