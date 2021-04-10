// ADD THE ES7 REACT REDUX SNIPPET EXTENSION ///
//  ADD GOGGLEMAPP REACT FROM gogglemapsreact///

import React from "react";
import GoogleMapReact from "google-map-react";

function Map({ center, zoom }) {
  return (
    // Place your goggle api key inside your bootstrapURLKeys//
    // PLace your api keys inside an ENV File//
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBilaDqHZC6axu2_xUjeT7D8p-QRwsiJj8" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
}
/// Maps properties will be outside the function
Map.defaultProps = {
  center: {
    lat: 9.082,
    lng: 8.6753,
  },
  zoom: 6,
};

export default Map;
