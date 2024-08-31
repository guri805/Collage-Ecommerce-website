import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

    
      <HorizontalCardProduct category={"watches"} heading={"Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      
      <VerticalCardProduct category={"airpodes"} heading={"Airpodes"}/>
      
      <VerticalCardProduct category={"furniture"} heading={"Household Furniture"}/>
      <VerticalCardProduct category={"toys"} heading={"Toys"}/> 
      <VerticalCardProduct category={"personal care"} heading={"Personal care Men's"}/>
      <VerticalCardProduct category={"protein"} heading={"Protein Powder"}/>
      
    </div>
  )
}

export default Home