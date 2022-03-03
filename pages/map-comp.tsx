import react, { useState, useEffect } from "react";
import ReactMapboxGl, { Layer, Feature, Source } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
//import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import * as THREE from "three";

export const MapComp: React.FC = () => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1Ijoiam9yZ2V5YWt1c2hpIiwiYSI6ImNreW5peTA0cTAzc2gydXFkNzQxaGFtdDAifQ.8kXyjwFoLk-IiyrQIBL8KA",
    antialias: true,
  });

  const modelOrigin = [-77.037571, -12.097557];
  const modelAltitude = 0;
  const modelRotate = [Math.PI / 2, 0, 0];
  const Model = () => {
    const gltf = useLoader(
      GLTFLoader,
      "https://docs.mapbox.com/mapbox-gl-js/assets/34M_17/34M_17.gltf"
    );
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    );
  };

  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <Map
        style="mapbox://styles/mapbox/light-v10"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
        center={[-77.037571, -12.097557]}
        zoom={[18]}
        pitch={[60]}
      >
        <Source type="geojson">
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}
          >
            <Feature coordinates={[-12.097557, -77.037571]} />
          </Layer>
        </Source>
      </Map>
    </div>
  );
};
