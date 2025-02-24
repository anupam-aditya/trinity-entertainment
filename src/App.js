import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsPage from "./pages/about-us";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";
// import "./App.css";
import WorkPage from "./pages/work";
import Footer from "./components/footer/Footer";
import Services from "./pages/services";
import WorkDetailPage from "./pages/services-detail";
import Contact from "./pages/contact-us";
import Career from "./pages/career";
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <div>
        <div className={styles.navBarContainer}>
          <Navbar />
        </div>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/services/:slug" element={<WorkDetailPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
        {/* <div className={styles.footerContainer}>
          <Footer />
        </div> */}
      </div>
    </Router>
  );
};
export default App;
