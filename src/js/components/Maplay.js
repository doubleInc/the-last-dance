import React from "react";
import { css, ClassNames } from "@emotion/core";
//leaflet
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// leaflet css file
import "leaflet/dist/leaflet.css";

// hack so that leaflet's images work after going through webpack
import marker from "leaflet/dist/images/marker-icon.png";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: markerShadow,
});

class Mapoverlay extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    const start = [-33.8545702, 151.0255673];
    return (
      <React.Fragment>
        <Map center={start} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
            </Popup>
          </Marker>
          <Marker position={[51, -0.08]} />
        </Map>
      </React.Fragment>
    );
  }
}

export default Mapoverlay;
