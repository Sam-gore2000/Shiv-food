import React,{useState} from 'react'

const CategoryItem = () => {
 

  return (
    <div className='mx-5'>
      <h1 className='mb-4 text-2xl font-bold'>Find The Best Food</h1>
     <div className='gap-3 flex'>
     <button className='px-2 py-2 bg-gray-300  font-bold rounded-lg hover:bg-green-600 hover:text-white'  >All</button>
      <button className='px-2 py-2 bg-gray-300  font-bold rounded-lg hover:bg-green-600 hover:text-white' >Lunch</button>
      <button className='px-2 py-2 bg-gray-300  font-bold rounded-lg hover:bg-green-600 hover:text-white'>BreakFast</button>
      <button className='px-2 py-2 bg-gray-300  font-bold rounded-lg hover:bg-green-600 hover:text-white'>Dinner</button>

      <button className='px-2 py-2 bg-gray-300  font-bold rounded-lg hover:bg-green-600 hover:text-white'>Snack</button>

     </div>
    </div>
  )
}

export default CategoryItem
