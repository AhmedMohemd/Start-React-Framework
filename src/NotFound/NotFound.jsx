import React from "react";
import img404 from "../assets/images.jpeg";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <>
      <div className="container text-center mt-5">
        <img src={img404} className="col-md-5 col-12" alt="error" />
        <div className="link my-2">
          <Link to="/Home">Go to Home Page</Link>
          <i class="fa-solid fa-hand-point-up d-block mx-auto mt-2"></i>
        </div>
      </div>
    </>
  );
}
