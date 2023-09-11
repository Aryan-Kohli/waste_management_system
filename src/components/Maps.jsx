import "./Maps.css";
import { useState } from "react";
import northeast from "../assets/mapspic/ne-Delhi.jpeg";
import central from "../assets/mapspic/c-Delhi.jpeg";
import east from "../assets/mapspic/e-Delhi.jpeg";
import south from "../assets/mapspic/s-Delhi.jpeg";
import southeast from "../assets/mapspic/se-Delhi.jpeg";
import southwest from "../assets/mapspic/sw-Delhi.jpeg";
import northwest from "../assets/mapspic/nw-Delhi.jpeg";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Maps() {
  const [image, SetImage] = useState(northwest);
  const options = [
    "Northeast Delhi ",
    "Central Delhi",
    "East Delhi",
    "South Delhi",
    "Southeast Delhi",
    "Southwest Delhi",
    "Northwest Delhi",
  ];
  const options2 = [
    northeast,
    central,
    east,
    south,
    southeast,
    southwest,
    northwest,
  ];
  const defaultOption = options[0];
  function func(event) {
    console.log(event.value);
    var x = event.value;
    var pos = -1;
    for (let index = 0; index < options.length; index++) {
      if (x === options[index]) {
        pos = index;
        break;
      }
    }
    SetImage(options2[pos]);
  }
  return (
    <div id="Maps" className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-4">
            <h1 id="Mapshead" className=" mt-4">
              Recycling Centres & Waste Bins Allocator
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={image} className="mapimg" />
          </div>
          <div className="col-md-6 offset-md-2 mapsinfo ">
            <h3>
              Locate the closest recycling center and waste bins by selecting
              your area from the options below.
            </h3>
            <Dropdown
              options={options}
              onChange={func}
              value={defaultOption}
              placeholder="Select an option"
              className="dropdownmaps"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
