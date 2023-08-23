import styled from "styled-components";
import {mobile} from "../responsive";
import {useState} from 'react';
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("assets/bg.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ 
    width:"75%"
  })}
`;

const Title = styled.h1`
  font-size: 24px;
//   font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const LinkTag = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color:red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const {isFetching, error} = useSelector(state=>state.user)

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
            placeholder="username"
            onChange={(e)=>{setUsername(e.target.value)}} 
          />
          <Input 
            placeholder="password" 
            type="password"
            onChange={(e)=>{setPassword(e.target.value)}}
            />
          <Button disabled={isFetching} onClick={handleClick}>LOGIN</Button>
          {error && <Error>Something Went Wrong!!</Error>}
          {/* <LinkTag>DO NOT YOU REMEMBER THE PASSWORD?</LinkTag> */}
          {/* <Link style={{textDecoration:'none',color:'black'}} to={'/register'}> */}
          {/* <LinkTag>CREATE A NEW ACCOUNT</LinkTag> */}
          {/* </Link> */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;