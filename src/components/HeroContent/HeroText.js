import React from 'react'
import Cta from '../Buttons/Cta'
function HeroText() {
  return (
    <div className='mx-6 h-full mt-32'>
      <h1 className='text-6xl font-bold'>Welcome to <span className='text-primCol'>CaterEase:</span> Where Every Bite is an Experience</h1>
      <p className='text-2xl mt-6 mb-6'>At CaterEase, we're more than just a catering app – we're your passport to a world of exquisite flavors, culinary talent, and unforgettable experiences. </p>
      <Cta />
    </div>
  )
}

export default HeroText
