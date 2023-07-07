import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import { styled } from "styled-components"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 10px;
  margin-right:20px;
`
const Option = styled.option`
`

function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Templates</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Themes: </FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>Green</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Theme
            </Option>
            <Option>Gaming</Option>
            <Option>MemeCoin</Option>
            <Option>Metaverse</Option>
            <Option>ICO</Option>
            <Option>NFT</Option>
            <Option>DAO</Option>
          </Select>
        </Filter>
       
        <Filter>
          <FilterText>Sort Themes: </FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price (low to high)</Option>
            <Option>Price (high to low)</Option>
            <Option>DAO</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList