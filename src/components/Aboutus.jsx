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
          <h1 className="text-center">Features</h1>
        </div>
        <div id="Cards-stack">
          <Card style={{ width: "24rem" }}>
            <Card.Img variant="top" src={quizpic} />
            <Card.Body>
              <Card.Title>Interactive Quizzes</Card.Title>
              <Card.Text>This is Feature 1.</Card.Text>
              <Button className="btn-success">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }}>
            <Card.Img variant="top" src={ngopic} />
            <Card.Body>
              <Card.Title>
                Collaboration with Non Goverment Organizations.
              </Card.Title>
              <Card.Text>This is Feature 2.</Card.Text>
              <Button className="btn-success">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }}>
            <Card.Img variant="top" src={modulespic} />
            <Card.Body>
              <Card.Title>
                Informative Educational Modules and Resources
              </Card.Title>
              <Card.Text>This is Feature 3.</Card.Text>
              <Button className="btn-success">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }}>
            <Card.Img variant="top" src={rewardpic} />
            <Card.Body>
              <Card.Title>Society of the month Competitions.</Card.Title>
              <Card.Text>This is Feature 4.</Card.Text>
              <Button className="btn-success">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }}>
            <Card.Img variant="top" src={blogpic} />
            <Card.Body>
              <Card.Title>Community Blogs</Card.Title>
              <Card.Text>This is Feature 5.</Card.Text>
              <Button className="btn-success">Know more.</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }}>
            <Card.Img variant="top" src={artist_ecommercepic} />
            <Card.Body>
              <Card.Title>Artists Section</Card.Title>
              <Card.Text>This is Feature 6.</Card.Text>
              <Button className="btn-success">Know more.</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
