import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Import Material icons
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core'

import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Container = styled.div`
    // height: 60px;
    background: rgba(0,0,0);
    ${mobile({
  padding: "10px 0px"
})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content:space-between;
  align-items:center;
`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`

const Language = styled.span`
  font-size:14px;
  cursor:pointer;
  color:#888;
  ${mobile({
  display: "none"
})}
`

const SearchContainer = styled.div`
  border: 1px solid #999999;
  display:flex;
  align-items:center;
  margin-left:25px;
  padding:5px;
`
const Input = styled.input`
  border:none;
  background:none;
  color:white;
  outline:none;
  ${mobile({
  width: "50px"
})}

`
const Center = styled.div`
  flex:1;
  text-align:center;
`

const Logo = styled.h1`
  font-weight:bold;
  color:white !important;
  text-decoration: none !important;
  ${mobile({
  fontSize: "10px",
  marginLeft: 14
})}
`
const Right = styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
  flex: 2,
  justifyContent: "center"
})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  color:#777;
  ${mobile({
  fontSize: "8px",
  marginLeft: '10px'
})}
 `


function Navbar() {
  const cart = useSelector((state) => state.cart)
  const user = useSelector((state) => state.user)
  console.log("store", cart)
  console.log("user", user && user.currentUser)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: '#888', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link style={{ textDecoration: 'none' }} to={`/`}>
            <Logo >MyWhaleHub</Logo>
          </Link>
        </Center>
        <Right>
          {!user ?
            <>
              <Link style={{ textDecoration: 'none', color: "white" }} to={`/register`}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link style={{ textDecoration: 'none', color: "white" }} to={`/login`}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
            : ""}
          <MenuItem>
            <Badge badgeContent={cart.quantity} color='primary' >
              <Link style={{ textDecoration: 'none', color: "white" }} to={`/cart`}>
                <ShoppingCartOutlined />
              </Link>
            </Badge>
            {/* <Badge/>  */}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar