# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- Accordance code  -->
import React, { useState } from 'react'
import ItemList from './ItemList'

const CategoryCard = () => {
const[itemShow,setItemShow]=useState(false)
    
    const handelItem=()=>{
        setItemShow(!itemShow)
    }
  return (

    <div className='w-6/12 border bg-gray-100 mx-auto my-8'>
        <div className=' flex justify-between' onClick={handelItem}>
            <h2 className='text-2xl font-bold '>Mahi Ka Dhaba</h2>
            <span>⬇️</span>
            </div>
          {itemShow &&  <ItemList/>}
      
    </div>
  )
}

export default CategoryCard
<!--  -->
import React from 'react'

const ItemList = () => {
  return (
    <div className='font-bold px-10'>
      <ul>
        <li>Samosa</li>
        <li>Tea</li>
        <li>Vadapav</li>
        <li>Milk</li>
        <li>Coffee</li>
      </ul>
    </div>
  )
}

export default ItemList
