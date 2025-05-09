import React from 'react'
import empty_cart from '../Menu/illustration-empty-cart.svg'
import '../Menu/CartDisplay.css'
const CartDisplay = () => {

    let cartNumber =0;
  return (
   <>
   <div className="cart_container">
    <p className='text-3xl font-bold text-red-700'> Your Cart ({cartNumber})</p>
    <img src={empty_cart} alt="empty card icon" />
    <p className='item_text'>Your Added items will appear here</p>
  
   </div>
   </>
  )
}

export default CartDisplay