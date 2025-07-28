import React, { useState } from "react";
import img1 from "../assets/poert1.png";
import img2 from "../assets/port2.png";
import img3 from "../assets/port3.png";
import "./portfolio.css";
export default function Portfolio() {
  const [selectImg, setSelectImg] = useState("");
  const closeModal = () => setSelectImg("");
  return (
    <>
      {/* Navbar */}
      {/* Portfolio */}
      <div className="Portfolio my-4 p-4">
        <div className="header text-center">
          <h2 className="text-uppercase">portfolio component</h2>
          <div className="icon d-flex align-items-center justify-content-center my-3">
            <div className="before"></div>
            <i className="fa-solid fa-star"></i>
            <div className="after"></div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-md-4">
              <div className="amge">
                <img src={img1} alt="img-1" className="w-100 rounded" />
                <div
                  className="layer d-flex justify-content-center align-items-center"
                  onClick={() => setSelectImg(img1)}
                >
                  <i className="fa-solid fa-plus text-white fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="amge">
                <img src={img2} alt="img-2" className="w-100 rounded" />
                <div
                  className="layer d-flex justify-content-center align-items-center"
                  onClick={() => setSelectImg(img2)}
                >
                  <i className="fa-solid fa-plus text-white fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="amge">
                <img src={img3} alt="img-3" className="w-100 rounded" />
                <div
                  className="layer d-flex justify-content-center align-items-center"
                  onClick={() => setSelectImg(img3)}
                >
                  <i className="fa-solid fa-plus text-white fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="amge">
                <img src={img1} alt="img-1" className="w-100 rounded" />
                <div
                  className="layer d-flex justify-content-center align-items-center"
                  onClick={() => setSelectImg(img1)}
                >
                  <i className="fa-solid fa-plus text-white fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="amge">
                <img src={img2} alt="img-2" className="w-100 rounded" />
                <div
                  className="layer d-flex justify-content-center align-items-center"
                  onClick={() => setSelectImg(img2)}
                >
                  <i className="fa-solid fa-plus text-white fa-7x"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="amge">
                <img src={img3} alt="img-3" className="w-100 rounded" />
                <div
                  className="layer d-flex justify-content-center align-items-center"
                  onClick={() => setSelectImg(img3)}
                >
                  <i className="fa-solid fa-plus text-white fa-7x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* layer */}
        {selectImg && (
          <div
            className="modal-layer d-flex justify-content-center align-items-center"
            onClick={closeModal}
          >
            <div className="content d-flex justify-content-center align-items-center">
              <img
                src={selectImg}
                alt="modal-img"
                className="col-md-8 col-12"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
      {/* InfoAndFoooter */}
    </>
  );
}
