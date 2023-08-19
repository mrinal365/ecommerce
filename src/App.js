import './App.css';
import { Route, Rediect, Routes, BrowserRouter, Navigate } from "react-router-dom"


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import { useSelector } from 'react-redux';

function App() {
  // console.log("current user", state.user.currentUser)
  const user = useSelector(state=>state.user.currentUser);
  return (
    // <div style={{backgroundImage:"url('/assets/bg.png')",backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}}>
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/success" exact element={<Success/>} />
          <Route path="/" exact element={
                !user ? <Navigate to="/login" /> : <Home />
          } />
          <Route path="/products/:category" element={
              !user ? <Navigate to="/login" /> :<ProductList />
              } />
          <Route path="/product/:id" element={
              !user ? <Navigate to="/login" /> :<Product />
          } />
          <Route path="/cart" element={
              !user ? <Navigate to="/login" /> :<Cart />
          } />
          <Route
            path="/register"
            element={
              user ? <Navigate to="/" /> : <Register />
              // <Register />
            }
          />
          <Route
            path="/login"
            element={
              user ? <Navigate to="/" /> : <Login />
              // <Login />
            }
          />
          <Route path="/success" exact element={<Success/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
