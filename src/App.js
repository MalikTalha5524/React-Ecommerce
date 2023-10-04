
import Homepage from "./Pages/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Shope from "./Pages/Shope";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import ProductDetail from "./components/projectDetails";
import BlogDetails from "./components/blogDetails";
import ShopContextProvider, { ShopContext } from "./context/ShopContext";
function App() {
  return (
    <>
    <ShopContextProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shope" element={<Shope />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
      </Routes>
    </Router>
    </ShopContextProvider>
    </>
  );
}

export default App;
