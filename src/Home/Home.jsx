import React from "react";
import "./Home.css";
import avatar from "../assets/avataaars.svg";
export default function Home() {
  return (
    <>
      {/* Home Page */}
      {/* navebar */}
      {/* component Home */}
      <div className="start text-white d-flex align-items-center justify-content-center flex-column">
        <div className="img mb-3 text-center ">
          <img src={avatar} className="mb-4" alt="" />
        </div>
        <h2 className="text-uppercase">start Framework</h2>
        <div className="icon d-flex align-items-center my-3">
          <div className="before"></div>
          <i className="fa-solid fa-star"></i>
          <div className="after"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      {/* footer */}
    </>
  );
}
