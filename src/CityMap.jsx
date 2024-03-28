
const API_KEY = import.meta.env.VITE_API_KEY;

function CityMap(props) {
    return (
        <>
            <h3>{props.cityData.display_name}</h3>
            <p>{`Latitude: ${props.cityData.lat}, Longitude: ${props.cityData.lon}`}</p>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.cityData.lat},${props.cityData.lon}&zoom=9`} style={{ width: '100%' }} alt="Map" />
        </>
    )
}

export default CityMap;
