import React from 'react'
import { Icon } from '@iconify/react'
function Cta() {
  return (
    <button className='bg-gradient-to-r from-ctaGradStart to-ctaGradEnd px-4 py-2 text-white rounded-full flex hover:shadow-lg'>Order Now <Icon icon="material-symbols:arrow-forward" color="#fefefe" width="24" height="24" />
    </button>
  )
}

export default Cta
