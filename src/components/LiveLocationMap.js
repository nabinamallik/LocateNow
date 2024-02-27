import React, { useState, useEffect } from 'react';
import Map from './map'; // Assuming Map.js is in the same directory

const LiveLocationMap = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch user locations from the backend API
    fetch('/api/locations')
      .then(response => response.json())
      .then(data => setLocations(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Live Location Map</h1>
      <Map locations={locations} />
    </div>
  );
};

export default LiveLocationMap;
