import Announcement from '../components/Announcement'
import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from '../utils/requestMethods'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ 
    padding:"10px",
    flexDirection: 'column'
  })}
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ 
    height:"40vh"
  })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ 
    padding:"10px"
  })}
`
const Title = styled.h1`
  font-weight: 200;

`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`


const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 30px 0px;  
  ${mobile({ 
    width:"100%"
  })}
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 0px;
  padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ 
    width:"100%"
  })}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: rgba(1,1,1,0.2)
  }
`


function Product() {
  const location= useLocation()
  const id = location.pathname.split('/')[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size,setSize] = useState('');
  const [color, setColor]= useState('');

  const dispatch = useDispatch()

  const notifyMe = (element) => {
    console.log("notify clicked");
    toast(`🦄 Added to Cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
}

  // fetching product info based on id from param
  useEffect(()=>{
    const getProduct = async()=>{
        try{
          const res = await publicRequest.get('/product/find/'+id);
          console.log(res)
          setProduct(res.data);
        } catch(err){
          console.log("err in getProduct", err)
        }
    }
    getProduct()
  },[id])

  // handle quantity change
  const handleQuantity = (type) =>{
      if(type=="dec"){
        quantity>=2 && setQuantity(quantity-1)
      }
      if(type=="inc"){
        (quantity>=1 && quantity<10) && setQuantity(quantity+1)
      }
  }
  const AddToCart = ()=>{
    notifyMe()
    // do it using redux
    dispatch(addProduct({...product, quantity,color,size}))
  }

  return (
    <Container>
      <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color&&product.color.map((itemColor)=>(
                <FilterColor onClick={()=>setColor(itemColor)} color={itemColor} key={itemColor}/>
              ))}
              {/* <FilterColor color='black' />
              <FilterColor color='black' />
              <FilterColor color='black' /> */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
                {product.size&&product.size.map((itemSize)=>(
                  <FilterSizeOption key={itemSize}>{itemSize}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>{handleQuantity('dec')}}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=>{handleQuantity('inc')}}/>
            </AmountContainer>
            <Button onClick={AddToCart}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default Product