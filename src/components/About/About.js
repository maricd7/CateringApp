import React from 'react'
import aboutImage from '../images/about-image.png';
import { Icon } from '@iconify/react';
function About() {
  return (
    <div className='flex items-center mr-24 justify-between mt-24 relative'>
        <img className='max-w-4xl' src={aboutImage}/>
        <div className='max-w-2xl gap-6 flex flex-col'>
            <span className='text-gray-400 font-bold text-xl'>ABOUT US</span>
            <h1 className='text-6xl font-bold text-blackTxt'>What is <span className='text-primCol'>special</span> <br/>about us?</h1>
            <p className='text-blackTxt'>At CaterEase, our passion is to bring people together through the love of good food and memorable dining experiences. We understand that food is more than just sustenance; it's a cornerstone of culture, a source of joy, and a medium for connection. That's why we've created a platform that celebrates the art of catering and the joy of sharing exceptional meals.</p>
        </div>
    </div>
  )
}

export default About
