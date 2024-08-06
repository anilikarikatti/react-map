import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {

    const [position, setPosition]:any = useState([51.505, -0.09]); // Default position (London)
  const [zoom, setZoom] = useState(13);

//   const MapControl = () => {
//     const map = useMap();
//     map.setView(position, zoom);
//     return null;
//   };
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh', width: '100%' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <MapControl></MapControl> */}
    <Marker position={position}>
      <Popup>

      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default MapComponent