import React,{useState} from 'react'
import { FoodItem } from './Data/FoodItem';
import { addToCart } from '../redux/cartSlice';
import {  useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const MenuCard = () => {
const[foodList,setFoodList]=useState(FoodItem)


const handelToast=()=>{
  toast.success('Item Added to Cart ');
}

const dispatch=useDispatch()

  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
    <div className='flex flex-wrap justify-center'>
        {
            foodList.map((item,index) =>{
                return(
                
                
                <div key={index}  className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg border-dark border-4 mx-3 my-2 '>
                
                    <img className='w-auto h-[150px] hover:scale-110 cursor-pointer' src={item.img} alt=''/>
                
                <div className='flex justify-between overflow-hidden'>
                <h2>{item.name}</h2>
                
                <span className='text-green-600'>₹{item.price}</span>
                </div>
                <p className='text-sm my-2 font-bold font-sans'>{item.desc.slice(0,45)}</p>
                  <div className='flex justify-between my-2'>
                <span className=''>
                <i className="fa-solid fa-star text-yellow-600 "></i>{item.rating}</span>
                <button className='p-1 bg-green-500 text-white text-sm hover:bg-green-700 rounded-lg' onClick={()=>{dispatch(addToCart(item));
                handelToast();
                }}>Add To Cart</button>
                
                  </div>
                     </div>
                     
                )
            })
        }
       
       
      
    </div>
    </>
  )
}

export default MenuCard;
