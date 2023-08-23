import { styled } from "styled-components"
import { Send } from "@material-ui/icons"
import { mobile } from "../responsive"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

const Container = styled.div`
    height:60vh;
    background-color:rgba(0,0,0,0.2);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({
    textAlign: "center"
})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    ${mobile({
    width: "80%"
})}
`
const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex:1;
    border: none;
    background-color: black;
    color: white;
    cursor:pointer;
`


function Newsletter() {
    const [email, setEmail] = useState("")
    const notifyMe = () => {
    if(email.length===0){
        toast('🦄 Please Enter Email', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    else if(email.length>0&&email.length<5){
        toast('incorrect email', {
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
    else if(email.length>5){
        toast('🦄 Thanks for subscribing!', {
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
}
    
    // useEffect(()=>{
        
    // },[email])
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
            <Title>Newsletter</Title>
            <Description>Get Timely Updates from your favorite products</Description>
            <InputContainer>
                <Input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Your Email" />
                <Button>
                    <Send onClick={() => { notifyMe() }} />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter