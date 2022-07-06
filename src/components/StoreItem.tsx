import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import FormatCurrency from '../utilities/FormatCurrency'

type StoreItemProps =  {
 id: number,
 name: string,
 price: number,
 imgUrl: string
}

const StoreItem = ({id, name, price, imgUrl}: StoreItemProps) => {
  const { getItemQuantity ,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart}   = useShoppingCart()
 
    const quantity = getItemQuantity(id) ;

  return (
    <div>
        <div className='flex flex-col '>
          <img src={imgUrl} className="h-[400px] object-cover" alt="" />
          
        <div className='flex flex-row justify-between  mb-6 md:flex-col'>  
          <h5 className="text-3xl ">
            {name}
          </h5>
          <span className='text-2xl'>{FormatCurrency(price)}</span>

        </div>
        <div className='m-auto'>
       {quantity === 0? (
        <button 
        className='w-25 p-2 m-2 bg-blue-400'
         onClick={()=> increaseCartQuantity(id)
        }> + Add to cart 
        </button>) : (
        
        <div className='flex flex-col'>
          <div className='flex gap-4 mb-4'>
          <button 
          onClick={()=> decreaseCartQuantity(id) }
          className='bg-blue-300 cursor-pointer'>
            -
          </button>
          
          <div>
                <span>{quantity}</span> in cart
          </div>
          <button 
          onClick={()=> increaseCartQuantity(id)} 
          className='bg-blue-300 cursor-pointer'>
            + 
          </button>
          
          </div>
          <button onClick={()=> removeFromCart(id)
        } className='bg-red-300 p-2 mb-4 rounded-lg'>Remove</button>
        </div> ) }
        </div>
         
        </div>
    </div>
  )
}

export default StoreItem