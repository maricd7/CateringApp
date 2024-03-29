import React from 'react'
import { Icon } from '@iconify/react'
function Bag({toggleCart}) {
  return (
    <div className='bag-toggler fixed right-24 bottom-12 z-40' onClick={toggleCart}>
      <Icon  width="64" height="64" icon="material-symbols:shopping-bag-outline-sharp" 
      className='bg-gradient-to-r from-ctaGradStart to-ctaGradEnd 
      text-white 
      rounded-full 
      p-2 
      hover:drop-shadow-md shadow-red-600 cursor-pointer'/>
    </div>
  )
}

export default Bag
