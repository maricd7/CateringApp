import React from 'react'
import { TopProductDiscount } from './TopProductDiscount'
import { TopProductImg } from './TopProductImg'

export const TopProductBox = ({myTopProduct}) => {
  return (
    <div>
    {myTopProduct && (
      <div className="bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-md bg-white bg-clip-padding">
       <TopProductDiscount discount={myTopProduct.discount}/>
       <TopProductImg myTopProduct={myTopProduct}/>
        <h3 className="text-xl font-semibold mt-4">{myTopProduct.name}</h3>
        <div className="flex gap-4 items-center	">
          <p className="text-blackTxt font-bold text-2xl">
            $
            {(myTopProduct.price - (myTopProduct.price * myTopProduct.discount) / 100).toFixed(2)}
          </p>
          <p className="text-gray-700 font-normal  text-2xl line-through">
            $
            {myTopProduct.price}
          </p>
        </div>
      </div>
    )}
  </div>
  )
}
