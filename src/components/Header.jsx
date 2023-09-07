import "./Header.css";

export default function header() {
  return (
    <div id="nav">
      <h1 id="title">Garbage Guardians</h1>
      <a className="link" href="#AboutUs">
        About us
      </a>
      <a className="link">Recycling Centres</a>
      <a className="link" href="#Complaint">
        Complaint
      </a>
      <a className="link">Discussions</a>
      <a className="link">Contact</a>
      <div id="left-section">
        <div className="btn-success" id="Login">
          Login | Signup
        </div>
      </div>
    </div>
  );
}
