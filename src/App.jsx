import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCard from "./componets/ProductCard.jsx";
import Products from "./page/Products.jsx";
import Navbar from "./componets/Navbar.jsx";
import Favorite from "./page/Favorite.jsx";
import Signup from "./page/auth/Signup.jsx";
import LatestProducts from "./componets/LatestProducts.jsx";
import Footer from "./componets/Footer.jsx";
import SearchResults from "./page/SearchResults.jsx";
import AddToCart from "./page/AddToCart.jsx";
import Login from "./page/auth/Login.jsx";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
        <Route path="/" element={<LatestProducts />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
