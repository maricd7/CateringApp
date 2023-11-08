import React from 'react'
import mainImage from '../images/main-image.png';
import { Icon } from '@iconify/react';

function MainImage() {
  return (
    <div className='relative heroImg'>
      <img className='w-screen' src={mainImage}/>
      <Icon width={80} height={80} className=' rounded-full animated-element   p-2 bg-gradient-to-r from-gradRedStart to-gradRedEnd absolute top-2 left-4' icon="fluent-emoji:hamburger" />
      <Icon  width={80} height={80}className='rounded-full   animated-element 	  p-2 bg-gradient-to-r from-gray-400 to-gray-500  absolute bottom-8 right-4' icon="fluent-emoji:hot-dog" />
      <Icon  width={80} height={80} className='rounded-full   animated-element    p-2 bg-gradient-to-r from-green-400 to-green-800" absolute bottom-2' icon="fluent-emoji:shallow-pan-of-food" />
    </div>
    
  )
}

export default MainImage
