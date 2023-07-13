import { styled } from "styled-components";
import { categories } from '../utils/sliderData';

import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ 
      padding:"0px",
      flexDirection: "column"
    })}
`

function Categories() {
  return (
    <Container>
        {categories.map((item)=>(
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories