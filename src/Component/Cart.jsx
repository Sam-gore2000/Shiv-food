import React from 'react'
import ItemCard from './ItemCard'

const Cart = () => {
  return (
    <>
      <div className='fixed right-0 top-0 w-full lg:w-[20vw] h-full p-6 bg-white '>
        <div className='flex justify-between text-center my-4'>
            <span className='font-bold text-2xl'>My Order</span>
            <i class="fa-solid fa-circle-xmark border-2 border-grey-600 text-dark font-bold p-1 text-xl rounded-md hover:bg-red-500 hover:text-white mr-2 mx-3" ></i>
        </div>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>

        <div className='font-bold text-sm p-3 absolute bottom-0 '>
            <h2>Item :</h2>
            <h3>Total Amount:</h3>
            <hr className='text-black'/>
            <button className='lg:w-[18vw] w-[90vw] mb-5 rounded-lg text-center text-white text-md bg-green-500 p-2  mr-3 my-2'>CheckOut</button>
        </div>

      </div>
    </>
  )
}

export default Cart
