
function ErrorMessage(props) {
    return (
        props.error ? <p id='error-display'> {props.error} </p> : <br/>
    )
}

export default ErrorMessage;
