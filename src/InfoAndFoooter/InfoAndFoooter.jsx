import React from "react";
import "./InfoAndFoooter.css";

export default function InfoAndFoooter() {
  return (
    <>
      {/* info */}
      <div className="info text-white">
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-md-4 my-3">
              <div className="location">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="wep">
                <h2>AROUND THE WEB</h2>
                <div className="icon">
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-3">
              <div className="about">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="text-white ">
        <p className="text-center  py-3 m-0">Copyright © Your Website 2021</p>
      </footer>
    </>
  );
}
