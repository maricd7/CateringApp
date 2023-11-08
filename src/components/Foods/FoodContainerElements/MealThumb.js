import React from 'react'

export const MealThumb = ({image, alt}) => {
  return (
    <img
    className="rounded-lg w-80 h-72"
    src={image}
    alt={alt}
  />
  )
}
