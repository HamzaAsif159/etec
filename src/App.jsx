import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import FAQ from "./pages/FAQ";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";

export default function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/shop" element={<Products />} />
          <Route exact path="/shop/:category" element={<Products />} />
          <Route
            exact
            path="/products/:productId"
            element={<ProductDetail />}
          />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}
