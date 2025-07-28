import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      {/* Navbar */}
      {/* About */}
      <div className="component d-flex align-items-center">
        <div className="container text-white text-center p-5">
          <h2 className="text-uppercase">about component</h2>
          <div className="icon d-flex align-items-center justify-content-center my-3">
            <div className="before"></div>
            <i className="fa-solid fa-star"></i>
            <div className="after"></div>
          </div>

          <div className="row text-start p-4">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* InfoAndFoooter */}
    </>
  );
}
