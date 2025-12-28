import React from "react";
import "./App.css";
import { assets } from "./assets/assets";
import Header from "./componenets/Header";
import About from "./componenets/About";
import Projects from "./componenets/Projects";
import Testimonials from "./componenets/Testimonials";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className=" absolute top-0 left-0 w-full z-10 ">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
