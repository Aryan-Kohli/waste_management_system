import "./Header.css";

export default function header() {
  return (
    <div id = "nav">
      <h1 id = "title">GarbageGuardians</h1>
        <a className = "link">About us</a>
        <a className = "link">Recycling Centres</a>
        <a className = "link">Complaint</a>
        <a className = "link">Discussions</a>
        <a className = "link">Contact</a>
      <div id = "left-section">
        <a id = "Login">Login | Signup</a>
      </div>
    </div>
  );
}
