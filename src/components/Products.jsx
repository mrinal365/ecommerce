import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components"
import { popularProducts } from "../utils/sliderData"
import Product from "./Product";
import { BASE_URL } from "../utils/requestMethods";
import { publicRequest } from "../utils/requestMethods";
const Container = styled.div`
    padding: 20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

function Products({ cat, filters, sort }) {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  
  console.log(cat, filters, sort);

  useEffect(() => {
    //Fetch Products
    const getProduct = async () => {
      try {
        setLoading(true)
        const res = await publicRequest.get(
          cat ? `/product/products?category=${cat}`
            : `/product/products`
        ) 
        console.log("prodcuts", res.data)
        setProducts(res.data);
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.log("err", err)

      }
    }
    getProduct();
  }, [cat])

  //Useeffect  for filtering producst based on filters 
  useEffect(() => {
    //on change of cat and filter variables, filter out the products based on them
    cat && setFilteredProducts(
      products.filter(item => {
        return Object.entries(filters).every(([key, value]) => {
          console.log("filters", filters)
          console.log("key:", key, "value:", value)
          return item[key].includes(value)
        }
        )
        console.log("item---", item)
      }
      )
    );
  }, [products, cat, filters])

  // useEffect based on sort 
  useEffect(() => {
    if ((sort === "newest")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if ((sort === "asc")) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    }

  }, [sort]);

  return (
    <Container>
      {/* {products.map((item)=>(
            <Product item={item} key={item.id}/>
        ))} */}
      {loading?<p style={{textAlign:'center',width:'100%'}}>...Loading Products</p>:<p></p>}
      {cat
        ? filteredProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))
        : products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />)
      }
    </Container>
  )
}

export default Products