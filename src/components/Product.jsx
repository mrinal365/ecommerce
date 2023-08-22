import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(1,1,1,0.2);
    z-index: 3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    // width:350px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#222;
    position:relative;
    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    height:200px;
    width:200px;
    border-radius: 50%;
    background-color:white;
    position: absolute;
`
const Image = styled.img`
    height:80%;
    overflow:hidden;
    // object-fit:cover;
    background-color:grey;
    z-index:2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color:#e9f5f5;
        transform: scale(1.1);
    }

`


function Product({item}) {
    const notifyMe = (element) => {
        console.log("notify clicked");
        toast(`🦄 Whishlist feature to be added soon`, {
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
  return (
  <Link style={{textDecoration:'none', color:'black'}} to={`/product/${item._id}`}>
    <div style={{marginBottom:'20px'}}>
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
        {/* <Circle/> */}
        <Image src={item.img}/>
        <Info>
            {/* <Icon>
                <ShoppingCartOutlined/>
            </Icon> */}
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined onClick={()=>{notifyMe()}}/>
            </Icon>
        </Info>
    </Container>
    <div style={{padding:'0px 10px',background:'',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <p style={{margin:0,textAlign:'left'}}>{item.title}</p>
    <p style={{margin:0,textAlign:'right'}}>$ {item.price}</p>
    </div>
    </div>
    </Link>
  )
}

export default Product