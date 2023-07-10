import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
    height:100vh;
    width:100vw;
    background: linear-gradient(
                    rgba(255,255,255,0.6),
                    rgba(255,255,255,0.4)
                ),
                url('assets/bg.png');
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
        width: 40%;
        padding: 20px;
        background-color: white;
`
const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
`
const Form = styled.form`
        // display: flex;
        font-wrap: wrap;
`
const Input = styled.input`
        flex: 1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px;
`
const Agreement = styled.span`
        font-size: 12px;
        margin:20px 0px;
`
const Button = styled.button`
`

function Register() {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Lastname"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A labore distinctio inventore ad officia eos, fugit molestias, laboriosam facere itaque laudantium voluptatum quos suscipit, quo soluta sapiente id vitae odio.
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register