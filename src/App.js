import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/about-us";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import WorkPage from "./pages/work";
import Footer from "./components/footer/Footer";
import Services from "./pages/services";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/services" element={<Services />} />
            {/* <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};
export default App;
