import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import PersonalInformation from "./pages/Profile/PersonalInformation";
import Address from "./pages/Profile/Address";
import AddAddress from "./pages/Profile/AddAddress";
import MyOrder from "./pages/Profile/MyOrder";
import NavigateTopPage from "./components/NavigateTopPage";
import LandingPage from "./pages/LandingPage";
import SellForm from "./pages/SellForm";
import MyProduct from "./pages/Profile/MyProduct";
import MyProductDetail from "./pages/Profile/MyProductDetail";
import Trade from "./pages/Trade";

function App() {
  return (
    <Router>
      <NavigateTopPage />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<PersonalInformation />} />
        <Route path="/profile/address" element={<Address />} />
        <Route path="/profile/address/add" element={<AddAddress />} />
        <Route path="/profile/myorder" element={<MyOrder />} />
        <Route path="/sell" element={<SellForm />} />
        <Route path="/profile/products" element={<MyProduct />} />
        <Route path="/myproduct/detail" element={<MyProductDetail />} />
        <Route path="/trade" element={<Trade />} />
      </Routes>
    </Router>
  );
}

export default App;
