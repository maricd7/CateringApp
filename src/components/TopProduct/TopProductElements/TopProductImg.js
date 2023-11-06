import React from 'react'

export const TopProductImg = ({myTopProduct}) => {
  return (
    <div> <img
    src={myTopProduct.image}
    alt={myTopProduct.name}
    className="w-48 h-48 object-cover mx-auto"
  /></div>
  )
}
