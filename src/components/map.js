import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from './navbar';

// Import the custom marker icon image
import markerIcon from './/resources/location.png';

const Map = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([location.lat, location.lng], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);
    } else {
      mapRef.current.setView([location.lat, location.lng]);
    }

    // Define custom marker icon
    const customIcon = L.icon({
      iconUrl: markerIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    // Add marker with custom icon
    L.marker([location.lat, location.lng], { icon: customIcon }).addTo(mapRef.current)
      .bindPopup(`Your Location`)
      .openPopup();
  }, [location]);

  return (
    <div id="map" style={{ paddingTop:'1rem', height: '100vh', width: '100%', overflow: 'hidden'}}></div>
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

  const refreshLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      error => console.error(error),
      { enableHighAccuracy: true }
    );
  };

  return (
    <div>
      <Navbar/>
      <Map location={location} />
      <button className="refresh-btn" onClick={refreshLocation} style={{position: 'fixed', left:"10px", bottom:"10px", zIndex:'999'}}>Refresh</button>
    </div>
  );
};

export default LiveLocationMap;
