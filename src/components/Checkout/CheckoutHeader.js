import React from 'react'
import { Icon } from '@iconify/react'

export const CheckoutHeader = () => {
  return (
    <div className='flex gap-4 items-center mb-16'>
      <a href="/">
        <Icon
          icon="material-symbols:arrow-back"
          width={32}
          height={32}
          className="cursor-pointer "
        />
      </a>
      <h1 className="text-6xl font-bold text-blackTxt">Checkout</h1>
      </div>
  )
}
