import './App.css';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    // <div style={{backgroundImage:"url('/assets/bg.png')",backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}}>
    <div>
      {/* <Home /> */}
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      <Login/>
    </div>
  );
}

export default App;
