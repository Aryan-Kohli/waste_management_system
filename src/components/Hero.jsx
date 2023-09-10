import "./Hero.css";

import ngopic1 from "../assets/ngo1.jpeg";
import ngopic2 from "../assets/ngo2.jpeg";
import cleanpic1 from "../assets/clean.jpeg";
import cleanpic2 from "../assets/clean2.jpeg";

export default function Hero() {
  return (
    <div id="hero">
      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active nexttimgbtn"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="nexttimgbtn"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className="nexttimgbtn"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
            className="nexttimgbtn"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cleanpic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ngopic1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cleanpic2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ngopic2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
