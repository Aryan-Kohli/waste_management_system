import "./Aboutus.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import quizpic from "../assets/quiz.svg";
import ngopic from "../assets/ngo.jpeg";
import modulespic from "../assets/modules.jpg";
import rewardpic from "../assets/reward.jpg";
import blogpic from "../assets/blog.jpg";
import artist_ecommercepic from "../assets/artist_ecommerce.jpg";

export default function Aboutus() {
  return (
    <div className="Aboutmain " id="AboutUs">
      <div className="container">
        <div className="about_head">
          <h1 className="text-center">Facilities</h1>
        </div>
        <div id="Cards-stack">
          <Card style={{ width: "24rem" }} className="cards mt-4">
            <Card.Img variant="top" src={quizpic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">Interactive Quizzes</Card.Title>
              <Card.Text>This is Feature 1.</Card.Text>
              <Button className="btn btn-primary">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className="cards mt-4">
            <Card.Img variant="top" src={ngopic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">
                Collaboration with Non Goverment Organizations.
              </Card.Title>
              <Card.Text>This is Feature 2.</Card.Text>
              <Button className="btn btn-primary">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className="cards mt-4">
            <Card.Img variant="top" src={modulespic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">
                Informative Educational Modules and Resources
              </Card.Title>
              <Card.Text>This is Feature 3.</Card.Text>
              <Button className="btn btn-primary">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className=" cards mt-4">
            <Card.Img variant="top" src={rewardpic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">
                Society of the month Competitions.
              </Card.Title>
              <Card.Text>This is Feature 4.</Card.Text>
              <Button className="btn btn-primary">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className="cards mt-4">
            <Card.Img variant="top" src={blogpic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">Community Blogs</Card.Title>
              <Card.Text>This is Feature 5.</Card.Text>
              <Button className="btn btn-primary">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className="cards mt-4">
            <Card.Img
              variant="top"
              src={artist_ecommercepic}
              className="cardimg"
            />
            <Card.Body>
              <Card.Title className="cardTitle">Artists Section</Card.Title>
              <Card.Text>This is Feature 6.</Card.Text>
              <Button className="btn btn-primary">Know more.</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
