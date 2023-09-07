import "./Complaint.css";

export default function Complaint() {
  return (
    <div id="Complaint">
      <div className="container">
        <div className="complaint-main-head">
          <h1 className="text-center">Register a Complaint ?</h1>
        </div>
        <div className="row">
          <div className="col-md-5 complaint-left">
            <div className="row ">
              <div className="col-md-6 num">145</div>
              <div className="col-md-6">Complaints Registered</div>
            </div>
            <div className="row">
              <div className="col-md-6 num">100</div>
              <div className="col-md-6">Complaints Solved</div>
            </div>
          </div>
          <div className="col-md-6 offset-md-1 complaintform"> </div>
        </div>
      </div>
    </div>
  );
}
