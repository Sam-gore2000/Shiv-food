import React,{useState} from 'react';
import ItemCard from './ItemCard';
import { FoodItem } from './Data/FoodItem';
import { useSelector } from 'react-redux';




const Cart = () => {
  const[activeCart,setActiveCart] =useState();
  const CartItem=useSelector((store)=>store.cart.items);
const totQty=CartItem.reduce((totQty,item)=>totQty+item.qty,0);
const totalPrice=CartItem.reduce((total,item)=>total+item.qty *item.price,0);

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-6 bg-white overflow-y-auto ${activeCart? "translate-x-0":"translate-x-full"} transition-all duration-500 z-10`}>
        <div className='flex justify-between text-center my-4'>
          <span className='font-bold text-2xl'>My Order</span>
          <i  onClick={()=>setActiveCart(!activeCart)} className={"fa-solid fa-circle-xmark ${}border-2 border-grey-600 text-dark font-bold p-1 text-xl rounded-md hover:bg-red-500 hover:text-white mr-2 mx-3"}></i>
        </div>
       
       
     {
      CartItem.length>=1?CartItem.map((food)=>{
        return(
          <ItemCard key={food.id} item={food} id={food.id} name={food.name} img={food.img} price={food.price} qty={food.qty}/>
        )
      }):<h2 className='text-xl font-bold text-red-600 text-center'>Your Cart Is Empty</h2>
     }
     

        <div className='font-bold text-sm p-3 absolute bottom-0 w-full'>
          <h2>Item :{totQty}</h2>
          <h3>Total Amount:{totalPrice}</h3>
          <hr className='text-black'/>
          <button className='lg:w-[18vw] w-[90vw] mb-5 rounded-lg text-center text-white text-md bg-green-500 p-2  mr-3 my-2'>CheckOut</button>
        </div>
        
      </div>
      <i onClick={()=>setActiveCart(!activeCart)} className="fa-solid fa-cart-shopping text-2xl px-3 py-2 rounded-full bg-white text-3xl shadow-md p-3 fixed bottom-4 right-4" >
        <span className='text-sm  radius-[50%] rounded-full right-1 bottom-8 px-2 bg-green-500 text-white absolute  '>{CartItem.length}</span>
      </i>
    </>
  );
};

export default Cart;
