import React from 'react'
import Cta from '../Buttons/Cta'
import Bag from '../Buttons/Bag'
function Navbar() {
  return (
    <div className='mt-6 mx-24 flex justify-between items-center'>
      <h4 className='text-gray-900 font-bold'>CaterEase</h4>
      <ul className='flex justify-between	items-center w-96'>
        <a><li>Home</li></a>
        <a><li>About</li></a>
        <a><li>Menu</li></a>
        <Cta/>
      </ul>
    </div>
  )
}

export default Navbar
