import "./Complaint.css";

export default function Complaint() {
  return (
    <div id="Complaint">
      <div className="container">
        <div className="complaint-main-head">
          <div className="row">
            <div className="offset-md-7">
              <h1>Register a Complaint ?</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 complaint-left">
            <div className="row ">
              <div className="col-md-6 num">145</div>
              <div className="col-md-6">Complaints Registered</div>
            </div>
            <div className="row">
              <div className="col-md-6 num " id="num100">
                100
              </div>
              <div className="col-md-6">Complaints Solved</div>
            </div>
          </div>
          <div className="col-md-6 offset-md-1 complaintform">
            <form>
              <div className="mb-3">
                <label for="exampleInputName1" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  required="true"
                  placeholder="John Doe"
                  autocomplete="off"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="JohnDoe@example.com"
                  required="true"
                  autocomplete="off"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputMobile1" className="form-label">
                  Contact No.
                </label>
                <input
                  type="text"
                  required="true"
                  placeholder="98XXXXXXXX"
                  className="form-control"
                  autocomplete="off"
                  id="exampleInputMobile1"
                  aria-describedby="emailHelp"
                />
                <div className="mb-3"></div>
                <label for="exampleInputAddress1" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  autocomplete="off"
                  placeholder="Los Angeles, USA"
                  required="true"
                  id="exampleInputPassword1"
                />
              </div>

              <div class="mb-3">
                <label for="DefaultFile" class="form-label">
                  Picture of the Location
                </label>
                <input class="form-control" type="file" id="DefaultFile" />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  required="true"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I am willing share the my personal Information for the welfare
                  of Society.
                </label>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
