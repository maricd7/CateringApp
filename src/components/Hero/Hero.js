import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroText from '../HeroContent/HeroText'
import MainImage from '../HeroContent/MainImage'
function Hero() {
  return (
    <div>
      <Navbar/>
      <div className='flex mt-12 mx-24 items-center justify-center	'>
        <HeroText className='max-w-5xl		 w-1/2'/>
        <MainImage  className='w-full'/>
      </div>
    </div>
  )
}

export default Hero
