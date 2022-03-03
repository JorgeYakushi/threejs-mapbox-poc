import react, { useState, useEffect } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapComp: React.FC = () => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1Ijoiam9yZ2V5YWt1c2hpIiwiYSI6ImNreW5peTA0cTAzc2gydXFkNzQxaGFtdDAifQ.8kXyjwFoLk-IiyrQIBL8KA",
  });

  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
        center={[-77.037571, -12.097557]}
        zoom={[15]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-12.097557, -77.037571]} />
        </Layer>
      </Map>
      ;
    </div>
  );
};
