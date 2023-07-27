import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import { styled } from "styled-components"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"
import { useLocation } from "react-router-dom"
import {useState} from 'react';

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
  ${mobile({ 
    width:"0px 20px", 
    display: 'flex',
    flexDirection: 'column'
  })}
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ 
    marginRight:"0px"
  })}
`

const Select = styled.select`
  padding: 10px;
  margin-right:20px;
  ${mobile({ 
    margin:"10px 0px"
  })}
`
const Option = styled.option`
`

function ProductList() {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const location= useLocation()
  // console.log(location.pathname.split('/')[2])
  const cat = location.pathname.split('/')[2];
  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleSort = (e)=>{
    setSort(e.target.value)
    console.log("---", sort)
  }
  console.log(filters)
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Templates</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Themes: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>White</Option>
            <Option>Blue</Option>
            <Option>Black</Option>
            <Option>Green</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
          </Select>
          <Select name='type' onChange={handleFilters}>
            <Option disabled >
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
          <Select onChange={handleSort}>
            <Option value="asc">Price (low to high)</Option>
            <Option value="desc">Price (high to low)</Option>
            <Option value="newest">Newest</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList