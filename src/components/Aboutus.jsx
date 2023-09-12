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
          <Card style={{ width: "24rem" }} className="cards mt-4 mx-4">
            <Card.Img variant="top" src={quizpic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">Interactive Quizzes</Card.Title>
              <Card.Text>
                Engage school children with quizzes promoting environmental
                knowlwdge{" "}
              </Card.Text>
              <Button className="btn btn-primary">Know more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className="cards mt-4 mx-4">
            <Card.Img variant="top" src={ngopic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">
                Collaboration with Non Goverment Organizations
              </Card.Title>
              <Card.Text>
                Streamline NGO campaigns , empower youth for waste management
                and engage communities
              </Card.Text>
              <Button className="btn btn-primary">Know more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className="cards mt-4 mx-4">
            <Card.Img variant="top" src={modulespic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">
                Informative Educational Modules and Resources
              </Card.Title>
              <Card.Text>
                Educational Modules: Engage young minds with interactive
                lessons, fostering environmental knowledge and awareness
              </Card.Text>
              <Button className="btn btn-primary">Know more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className=" cards mt-4 mx-4">
            <Card.Img variant="top" src={rewardpic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">
                Society of the month Competitions
              </Card.Title>
              <Card.Text>
                Encourage societies to compete for the "Cleanest and Greeniest
                Society of the Month" title
              </Card.Text>
              <Button className="btn btn-primary">Know more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className="cards mt-4 mx-4">
            <Card.Img variant="top" src={blogpic} className="cardimg" />
            <Card.Body>
              <Card.Title className="cardTitle">Community Blogs</Card.Title>
              <Card.Text>
                Community Blogs: Empower individuals to share their insights and
                knowledge on waste management through community-contributed
                blogs, featured on our platform to inspire and educate others
              </Card.Text>
              <Button className="btn btn-primary">Know more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "24rem" }} className="cards mt-4 mx-4">
            <Card.Img
              variant="top"
              src={artist_ecommercepic}
              className="cardimg"
            />
            <Card.Body>
              <Card.Title className="cardTitle">Artists Section</Card.Title>
              <Card.Text>
                Artist Showcase: Provide talented artists a platform to showcase
                and sell their unique recycled creations, promoting
                sustainability through art
              </Card.Text>
              <Button className="btn btn-primary">Know more</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
