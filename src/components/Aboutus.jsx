import "./Aboutus.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Aboutus() {
  return (
    <div className="Aboutmain " id="AboutUs">
      <div className="container">
        <div className="about_head">
          <h1 className="text-center">Features</h1>
        </div>
      <div id = "Cards-stack">
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="../src/assets/quiz.svg" />
          <Card.Body>
            <Card.Title>Interactive Quizzes</Card.Title>
            <Card.Text>
              This is Feature 1.
            </Card.Text>
            <Button className="btn-success">Know more.</Button>
          </Card.Body>
       </Card>
       <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="../src/assets/ngo.jpeg" />
          <Card.Body>
            <Card.Title>Collaboration with Non Goverment Organizations.</Card.Title>
            <Card.Text>
              This is Feature 2.
            </Card.Text>
            <Button className="btn-success">Know more.</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="../src/assets/modules.jpg" />
          <Card.Body>
            <Card.Title>Informative Educational Modules and Resources</Card.Title>
            <Card.Text>
              This is Feature 3.
            </Card.Text>
            <Button className="btn-success">Know more.</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="../src/assets/reward.jpg" />
          <Card.Body>
            <Card.Title>Society of the month Competitions.</Card.Title>
            <Card.Text>
              This is Feature 4.
            </Card.Text>
            <Button className="btn-success">Know more.</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="../src/assets/blog.jpg" />
          <Card.Body>
            <Card.Title>Community Blogs</Card.Title>
            <Card.Text>
              This is Feature 5.
            </Card.Text>
            <Button className="btn-success">Know more.</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '24rem' }}>
          <Card.Img variant="top" src="../src/assets/artist_ecommerce.jpg" />
          <Card.Body>
            <Card.Title>Artists Section</Card.Title>
            <Card.Text>
              This is Feature 6.
            </Card.Text>
            <Button className="btn-success">Know more.</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
    </div>
  );
}
