import React from "react";
import Navbar from "../Navbar/Navbar";
import InfoAndFoooter from "../InfoAndFoooter/InfoAndFoooter";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <InfoAndFoooter />
    </>
  );
}
