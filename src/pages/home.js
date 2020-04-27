import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
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

//
import Writeup from "../js/components/Writeup";

class Home extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <React.Fragment>
        <Container
          css={css`
            margin-top: 2em;
          `}
          fixed
        >
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          >
            <Writeup />
            <Map center={position} zoom={this.state.zoom}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <Marker position={[51, -0.08]} />
            </Map>
          </Typography>
          />
        </Container>
      </React.Fragment>
    );
  }
}

// export default function Home() {
//   const position = [51.505, -0.09];
//   const zoom = 13;
//   return (
//     <React.Fragment>
//       <Container fixed>
//         <Typography
//           component="div"
//           style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
//         >
//           <Map center={position} zoom={zoom}>
//             <TileLayer
//               attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={position}>
//               <Popup>
//                 A pretty CSS3 popup. <br /> Easily customizable.
//               </Popup>
//             </Marker>
//           </Map>
//         </Typography>
//         />
//       </Container>
//     </React.Fragment>
//   );
// }

// const Home = () => (
//   <div>
//     <h2>Welcome</h2>
//   </div>
// );

export default Home;
