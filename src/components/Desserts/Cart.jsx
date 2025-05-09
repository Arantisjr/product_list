import React from 'react'
import cartimage from '../Desserts/icon-add-to-cart.svg'
import '../Desserts/Cart.css'

const Cart = (props) => {
    const{image, p1, foodName, price} = props
  return (
    <>
    <div className="image_container">
        <img className='food_img' src={image} alt="food-picture" />

        <button className='add_button' >
        <img src={cartimage} alt="cart-image" />
        <span>Add to cart</span>
        </button>
        <div className="namepricing">
        <p className='paragraph1'>{p1}</p>
        <p className='foodname'>{foodName}</p>
        <p className='price'>{price}</p>
        </div>

    </div>
    
    </>
  )
}

export default Cart