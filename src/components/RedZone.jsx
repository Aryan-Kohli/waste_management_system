import "./RedZone.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import trash from "../assets/trash.jpeg";
import trash2 from "../assets/trash2.jpeg";
import marker from "../assets/location.jpeg";
import map from "../assets/red_zone_map.jpg";

export default function RedZone() {
    return (
    <div className="container">
          <div className="row">
        <div id = "col-md-4">
         <h1 id = "head">Red Zones</h1>
         </div>
         <img id = "map" src = {map} alt = "map" />
         <h2 className = "head">Active Red Zones</h2>
         <div id = "reports">
         <Card style={{ width: "36rem" }} className="trashcards mt-4 mx-4">
            <Card.Img variant="top" src={trash} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">Location:</Card.Title>
              <Card.Text>
              Lothian Rd, Chabi Ganj, Kashmere Gate, Delhi, 110006 <img id ="icon" src ={marker} alt = "icon" />
              </Card.Text>
              <Button className="btn">See on map 📌</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "36rem" }} className="trashcards mt-4 mx-4">
            <Card.Img variant="top" src={trash2} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">Location:</Card.Title>
              <Card.Text>
                Chaudhary Nand Lal Marg, Gulabi Bagh, Delhi, 110007 <img id ="icon" src ={marker} alt = "icon" />
              </Card.Text>
              <Button className="btn">See on map 📌</Button>
            </Card.Body>
          </Card>
         </div>
         </div>
    </div>
    )
}