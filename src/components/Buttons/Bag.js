import React from 'react'
import { Icon } from '@iconify/react'
function Bag() {
  return (
    <div>
      <Icon  width="32" height="32" icon="material-symbols:shopping-bag-outline-sharp" 
      className='bg-gradient-to-r from-ctaGradStart to-ctaGradEnd 
      text-white 
      rounded-full 
      p-2 
      hover:drop-shadow-md shadow-red-600 cursor-pointer'/>
    </div>
  )
}

export default Bag
