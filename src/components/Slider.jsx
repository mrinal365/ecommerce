import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { styled } from "styled-components"
import { useEffect, useState } from "react"
import { sliderItems } from "../utils/sliderData"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { mobile } from '../responsive';

const Container = styled.div`
 width:100%;
 height:90vh;
 display:flex;
 background-color:rgba(0,0,0,0.2);
 position:relative;
 overflow:hidden;
 ${mobile({
  display: "none"
})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
  height:100%;
  display:flex;
  // alignItems:center;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw )
`
const Slide = styled.div`
  width:100vw;
  height:100%;
  display:flex;
  align-items:center;
  background-color: ${props => props.bg}
`
const ImgContainer = styled.div`
  height:100%;
  flex:1
`
const Image = styled.img`
  height:100%;
`

const InfoContainer = styled.div`
  flex:1;
  padding:20px;
`
const Title = styled.div`
font-size:70px;
`
const Desc = styled.div`
  margin:50px 0px;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
`
const Button = styled.button`
  padding:10px 30px;
  font-size: 20px;
  background-color:black;
  color:white;
  cursor: pointer;
  border:none;
`

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleCLick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
    if (direction = "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }



  const notifyMe = (element) => {
    console.log("notify clicked");
    toast(`🦄 🔔🔔🔔You will be notified for ${element}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
    // toast(`🔔🔔🔔You will be notified for ${element}`);
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
      <Arrow direction='left' onClick={() => handleCLick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <div>
                <Button onClick={()=>{notifyMe(item.title.toLowerCase())}}>Notify Me</Button>
              </div>
            </InfoContainer>
          </Slide>
        ))}


      </Wrapper>
      <Arrow direction='right' onClick={() => handleCLick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider