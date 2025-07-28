import React from "react";
import About from "./About/About";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact/Contact";
import Layout from "./Layout/Layout";

export default function App() {
  let Rootes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "Contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Rootes} />
    </>
  );
}
