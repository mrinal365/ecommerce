import axios from "axios";
import { useEffect } from "react";
import { styled } from "styled-components"
import { popularProducts } from "../utils/sliderData"
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

function Products({cat, filters, sort}) {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([])
  console.log(cat, filters, sort);
  
  useEffect(()=>{
      const getProduct = async()=>{
        try{
          const res = await axios.get(
            cat ?`http://localhost:8001/product/products?category=${cat}`
            : "http://localhost:8001/product/products"
          )
          setProducts(res.data);
        } catch(err){

        }
      }
      getProduct();
  },[cat])

  useEffect(()=>{
    cat&setFilteredProducts(
      produ
    )
  }, [cat,filters])
  
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products