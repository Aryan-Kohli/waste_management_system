import "./Hero.css";
import peopleclean from "../assets/animated_clean.png";
import peoplecleanr from "../assets/cleaning.png";
import ngoteaching from "../assets/ngo_teaching_about_waste_to_students.png";
import ngoteachingr from "../assets/ngo_teaching_student_about_plastics_and_wastes.png";

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
            <img src={peopleclean} className="d-block mx-auto img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={peoplecleanr} className="d-block mx-auto img-small" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ngoteaching} className="d-block mx-auto img-small" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ngoteachingr} className="d-block mx-auto img-small" alt="..." />
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
