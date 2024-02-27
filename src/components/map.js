import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([location.lat, location.lng], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);
    } else {
      mapRef.current.setView([location.lat, location.lng]);
    }

    L.marker([location.lat, location.lng]).addTo(mapRef.current)
      .bindPopup('Your Location')
      .openPopup();
  }, [location]);

  return (
    <div id="map" style={{ height: '400px', width: '100%' }}></div>
  );
};

const LiveLocationMap = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const geoId = navigator.geolocation.watchPosition(
      position => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      error => console.error(error),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(geoId);
  }, []);

  return (
    <div>
      <Map location={location} />
    </div>
  );
};

export default LiveLocationMap;
