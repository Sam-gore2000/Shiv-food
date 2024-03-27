import React from 'react'
import Header from '../Component/Header'
import CategoryItem from '../Component/CategoryItem'
import FoodContainer from '../Component/FoodContainer'
import Cart from '../Component/Cart'



const Home = () => {

  return (
    <div>
      <Header/>
      <CategoryItem  />
  <FoodContainer/>
  <Cart/>
     
    </div>
  )
}

export default Home
