import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className="Aboutmain " id="AboutUs">
      <div className="container">
        <div className="about_head">
          <h1 className="text-center">About us </h1>
        </div>
        <div className="aboutpara row">
          <div className="col-md-6">
            <div className="row " id="aboutpara1">
              "The 'Garbage Guardians' offers a comprehensive solution to all
              your garbage-related issues. Its special features include:
            </div>
            <div className="row " id="aboutpara2">
              <ul>
                <li>
                  Lodging a complaint about your area by simply taking a photo
                </li>
                <li>
                  Checking if your zone falls under the red zone category.
                </li>
                <li>Accessing the locations of nearby NGOs.</li>
                <li>
                  Interacting with others online to address your waste problems.
                </li>
                <li>Participating in quizzes to earn certifications.</li>
                <li>
                  Registering as an NGO and helping raise awareness about waste
                  management in villages.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 offset-md-1 aboutleftimg"></div>
        </div>
      </div>
    </div>
  );
}
