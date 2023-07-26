import './App.css';
import { Route, Rediect, Routes, BrowserRouter, Navigate } from "react-router-dom"


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  const user = true;
  return (
    // <div style={{backgroundImage:"url('/assets/bg.png')",backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}}>
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/register"
            element={
              user ? <Navigate to="/" /> : <Register />
            }
          />
          <Route
            path="/login"
            element={
              user ? <Navigate to="/" /> : <Login />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
