import React from "react";
import Header from "./component/Head/Header";
import Features from "./component/Features/Features";
import Home from "./component/Hero/Home";
import Portfolio from "./component/Portfolio/Portfolio";
import Resume from "./component/Resume/Resume";
import Testimonial from "./component/Testimonial/Testimonial";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer";
import "./App.css";

//       <Blog />  entre testmoniales et contact

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Blog /> 
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
