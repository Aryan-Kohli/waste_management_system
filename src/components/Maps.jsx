import "./Maps.css";
import { useState } from "react";
import northeast from "../assets/ne-delhi.jpg";
import central from "../assets/c-delhi.jpg";
import east from "../assets/e-delhi.jpg";
import south from "../assets/s-delhi.jpg";
import southeast from "../assets/se-delhi.jpg";
import southwest from "../assets/sw-delhi.jpg";
import northwest from "../assets/nw-delhi.jpg";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function Maps() {
  const [image, SetImage] = useState(northwest);
  const options = [
    "northeast delhi ",
    "Central delhi",
    "east Delhi",
    "south delhi",
    "southeast delhi",
    "southwest delhi",
    "northwest delhi",
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
        <h1 id="Mapshead" className=" mt-4">
          Recycling Centres & Waste Bins Allocator
        </h1>
        <div className="row">
          <div className="col-md-4">
            <img src={image} className="mapimg" />
          </div>
          <div className="col-md-5 mapsinfo ">
            <h1>
              Locate the closest recycling center and waste bins by selecting
              your area from the options below.
            </h1>
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
