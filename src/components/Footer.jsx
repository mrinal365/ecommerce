import { Facebook, Instagram, MailOutline, Phone } from "@material-ui/icons"
import { styled } from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
    background: #111;
    display: flex;
    color:white;
    ${mobile({ 
        flexDirection:"column"
      })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`
const Desc = styled.div`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ 
        display:"none"
      })}
`
const Title = styled.h3`

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    height: 20px;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>Mywhale hub</Logo>
            <Desc>MyWhaleHub is a one stop shop for all all kinds of templates</Desc>
            <SocialContainer>
                <SocialIcon color="000">
                    <Facebook/>
                </SocialIcon >
                <SocialIcon color="000">
                    <Instagram/>
                </SocialIcon>
                
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
                address add add address
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: 10}}/> +91 930432****
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: 10}}/> contact@mywhalehub.com
            </ContactItem>
            <Payment src="assets/logo.png"/>
        </Right>
    </Container>
  )
}

export default Footer