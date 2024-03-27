// ItemCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCart,incrementQty,decrementQty} from '../redux/cartSlice';
import toast, { Toaster } from 'react-hot-toast';

const ItemCard = ({ img, name, id, price, qty }) => {
  const dispatch = useDispatch();

  const handelToast1=()=>{
    toast.error(`${name}Item Deleted From Cart.`)
  }

  return (
    <>
    {/* <Toaster position="top-center"reverseOrder={false}/> */}
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
      <i onClick={() => {dispatch(removeCart({ id }));handelToast1()}} className="fa-solid fa-trash absolute right-7 text-gray-600 cursor-pointer"></i>
      <img src={img} alt='' className='w-[50px] h-[50px]' />
      <div className=''>
        <h1 className='font-bold text-gray-800'>{name}</h1>
        <div className='flex justify-between'>
          <span className='text-green-600 font-bold'>{price}</span>
          <div className='flex justify-center items-center gap-2 absolute right-7'>
            <i   onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              } className="fa-solid fa-plus border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-md transition-all ease-linear cursor-pointer"></i>
            <span className="mx-3 border border-dark px-2">{qty}</span>
            <i  onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }  className="fa-solid fa-minus border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-md transition-all ease-linear cursor-pointer "></i>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ItemCard;
