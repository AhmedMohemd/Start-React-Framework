import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      {/* Navbar */}
      {/* Contact */}
      <div className="Content py-5 my-4">
        <div className="header mb-5 text-center">
          <h2 className="text-uppercase">conatct section</h2>
          <div className="icon d-flex align-items-center justify-content-center my-3">
            <div className="before"></div>
            <i className="fa-solid fa-star"></i>
            <div className="after"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div>
                <div className="inputs mb-5">
                  <label htmlFor="exampleInputName" className="form-label">
                    userName :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="NameHelp"
                    placeholder="userName"
                  />
                </div>
                <div className="inputs mb-5">
                  <label htmlFor="exampleInputAge" className="form-label">
                    userAge :
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputAge"
                    aria-describedby="AgelHelp"
                    placeholder="userAge"
                  />
                </div>
                <div className="inputs mb-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    userEmail :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="userEmail"
                  />
                </div>
                <div className="inputs mb-5">
                  <label htmlFor="exampleInputPassword" className="form-label">
                    userPassword :
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword"
                    aria-describedby="PasswordHelp"
                    placeholder="userPassword"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  send Meassage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* InfoAndFoooter */}
    </>
  );
}
