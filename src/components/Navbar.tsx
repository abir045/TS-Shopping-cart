import React from 'react'
import { Link } from 'react-router-dom'
import  {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
        <div className='flex m-4 p-4  mb-10 justify-between sticky'>
           <div className='justify-start space-x-6'>
          <Link to='/'>Home</Link>
           <Link to='/store'>Store</Link>
           <Link to='/about'>About</Link>
            </div> 
          
          <div className='flex'>
           <AiOutlineShoppingCart className='relative justify-end  rounded' size={30}/>
           <div className='absolute bg-red-300 rounded-full w-[25px] h-[25px] items-center
            text-center top-12 right-15'>
            3
           </div>
          </div>
          
        </div>
    </div>
  )
}

export default Navbar