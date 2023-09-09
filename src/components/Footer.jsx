import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <svg
        className="rounded-bottom"
        // width="1920"
        // height="150"
        viewBox="0 0 1920 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M960 0H0V150C0 150 368.5 0 960 0Z" fill="white"></path>
        <path
          d="M1920 150C1920 150 1551.5 0 960 0H1920V150Z"
          fill="white"
        ></path>
      </svg>
      <div className="footermain">
        <div className="container">
          <div className="row">
            <h1 className="donatehead text-center">
              "Make a difference today!
            </h1>
            <h1 className="donatehead text-center">
              Click the 'Donate Now' button to contribute towards our waste
              management initiatives and help create a cleaner, greener world."
            </h1>

            <button type="button" class="btn btn-donate mx-auto mt-3">
              Donate Now
            </button>
          </div>
          <div className="hrr mx-auto"></div>
          <div className="row footerlinks">
            <div className="col-md-1 ">
              <ul>
                <li>about</li>
                <li>complaint</li>
                <li>lost</li>
                <li>pink</li>
              </ul>
            </div>
            <div className="col-md-1 offset-md-2">
              <ul>
                <li>about</li>
                <li>complaint</li>
                <li>lost</li>
                <li>pink</li>
              </ul>
            </div>
            <div className="col-md-1 offset-md-2">
              <ul>
                <li>about</li>
                <li>complaint</li>
                <li>lost</li>
                <li>pink</li>
              </ul>
            </div>

            <div className="col-md-1 offset-md-2">
              <ul>
                <li>about</li>
                <li>complaint</li>
                <li>lost</li>
                <li>pink</li>
              </ul>
            </div>
          </div>
          <div className="row footerkafooter">
            <div className="col-md-6 mt-4">
              <h6>© 2023 GarbageGuardians. All rights reserved.</h6>
              {/* <div className="row " id="ftlinks">
                <a href="">Terms of service </a>
                <a href="">Privacy Policy </a>
                <a href="">privacy Settings</a>
                <a href="">Copyright Policy</a>
              </div> */}
              <div className="row">
                <div className="col-md-3">
                  <a>Terms of service</a>
                </div>
                <div className="col-md-3">
                  <a>Privacy Policy</a>
                </div>
                <div className="col-md-3">
                  <a>Privacy settings</a>
                </div>
                <div className="col-md-3">
                  <a>Copyright Policy</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-2">
              <div className="row mt-3 handles">
                <div className="col-md-3 mt-3">Follow us</div>
                <div className="col">
                  <a class="link2 twitter">
                    <i class="fab fa-2x fa-twitter"></i>
                  </a>
                </div>
                <div className="col">
                  {" "}
                  <a class="link2 instagram">
                    <i class="fab fa-2x fa-instagram"></i>
                  </a>
                </div>
                <div className="col">
                  <a class="link2 linkedin">
                    <i class="fab fa-2x fa-linkedin"></i>
                  </a>
                </div>
                <div className="col">
                  <a class="link2 facebook">
                    <i class="fab fa-2x fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
