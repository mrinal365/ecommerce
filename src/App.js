import './App.css';
import { Route, Routes,BrowserRouter  } from "react-router-dom"


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    // <div style={{backgroundImage:"url('/assets/bg.png')",backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}}>
    <>
    <BrowserRouter >
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
