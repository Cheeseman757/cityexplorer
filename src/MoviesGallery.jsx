import Movies from './Movies.jsx'
import { Card } from 'react-bootstrap';

function MoviesGallery(props) {
    return (
        <>
            <h3 style={{ padding: '20px' }}> Movies </h3>
            {props.moviesData?.data?.length !== 0
            ? 
            <div>
                {props.moviesData?.data?.map((movie, idx) => <Movies key={idx} data={movie} /> )}
            </div>
            :
            <Card style={{ padding: '10px', width: 'max-content', margin: 'auto'}}>
                <Card.Body>
                    <Card.Title> No Results Found </Card.Title>
                    <Card.Text> The supplied location does not match any movies </Card.Text>
                </Card.Body>
            </Card>
            }
        </>
    )
}

export default MoviesGallery;
