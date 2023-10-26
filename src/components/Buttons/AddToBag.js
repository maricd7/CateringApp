import React from 'react'
import { Icon } from '@iconify/react'
function AddToBag({addToCart , index}) {
  return (
    <button onClick={()=>addToCart(index)} className=' bg-gradient-to-r from-ctaGradStart to-ctaGradEnd px-4 py-2 flex items-center w-full justify-center gap-4 text-white rounded-full flex hover:shadow-lg'>Add To Bag
        <Icon  width="32" height="32" icon="material-symbols:shopping-bag-outline-sharp" />
    </button>
  )
}

export default AddToBag
