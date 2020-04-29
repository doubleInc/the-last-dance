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

const Mapmarker = ({ name, coords, address }) => {
  return (
    <Marker position={[coords.lat, coords.lng]}>
      <Popup>
        {name}, <br /> {address}.
      </Popup>
    </Marker>
  );
};

class Mapoverlay extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };

  render() {
    //console.log(this.props.center);

    const locations = this.props.locations;

    return (
      <React.Fragment>
        <Map center={this.props.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location) => (
            <Mapmarker {...location} />
          ))}
        </Map>
      </React.Fragment>
    );
  }
}

export default Mapoverlay;
