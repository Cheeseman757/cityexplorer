import {Form, Button} from 'react-bootstrap';

function Search(props) {

    const handleInput = (event) => {
        let value = event.target.value;
        props.setCity(value);
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(props.cityVar);
      }
    
    return (
        <Form style={{margin: '10px'}}>
          <Form.Control style={{width: '400px', margin: 'auto'}} type="text" placeholder="Enter a city name" onChange={handleInput} />
          <Button style={{margin: '10px'}} type='submit' onClick={handleSubmit}>
            Explore!
          </Button>
        </Form>
    );
}

export default Search;
