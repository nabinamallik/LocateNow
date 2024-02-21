import { useState, useEffect} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const [latitude, setLatitude] = useState(14.0860746);
    const [longitude, setLongitude] = useState(100.608406);

    useEffect(() => {
        const map = L.map('map').setView([latitude, longitude], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map);
    }, [latitude, longitude]); // Ensure useEffect runs whenever latitude or longitude changes

    return (
        <div style={{ width: '100%', height: '400px' }}>
            <div  id='map' style={{ width: '100%', height: '100%' }}></div>
            <div>
                <label>Latitude:</label>
                <input type="number" value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value))} />
            </div>
            <div>
                <label>Longitude:</label>
                <input type="number" value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value))} />
            </div>
        </div>
    );
};

export default MapComponent;
