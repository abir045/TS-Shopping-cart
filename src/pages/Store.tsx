import React from 'react'
import StoreItems from  "../data/item.json";
import StoreItem from '../components/StoreItem';

const Store = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        {StoreItems.map(item => (
          <div> <StoreItem {...item}  /> </div>
        ) )}

      </div>

    </div>
  )
}

export default Store