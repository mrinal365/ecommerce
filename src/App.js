import './App.css';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Product from './pages/Product';

function App() {
  return (
    // <div style={{backgroundImage:"url('/assets/bg.png')",backgroundPosition:'center',backgroundSize:'cover',objectFit:'cover'}}>
    <div>
      {/* <Home /> */}
      {/* <ProductList/> */}
      <Product/>
    </div>
  );
}

export default App;
