import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
