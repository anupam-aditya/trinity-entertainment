import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/footer/Footer";
import Headlines from "./components/headlines/Headlines";
import Navbar from "./components/navbar/Navbar";
import RecentAccomplishment from "./components/recent-accomplisment";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      <Slider />
      <RecentAccomplishment />
      <Headlines />
      <Footer />
    </div>
  );
}

export default App;
