import styled  from "styled-components";

//Style component styles
const Container = styled.div`
    height:30px;
    background-color: rgba(0,0,0,0.2);
    color:black;
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

function Announcement() {
  return (
    <Container>Welcome to Whalehub shop</Container>
  )
}

export default Announcement