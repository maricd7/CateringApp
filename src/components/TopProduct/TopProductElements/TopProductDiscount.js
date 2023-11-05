import React from 'react'

export const TopProductDiscount = ({discount}) => {
  return (
    <div>{discount > 0 && (
        <span className="text-white bg-red-600 py-2 px-6 rounded-lg absolute right-0 top-0">
          {discount}%
        </span>
      )}</div>
  )
}

