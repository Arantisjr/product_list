import React from 'react'
import { useState } from 'react'
import cartimage from '../Desserts/icon-add-to-cart.svg'
import minus__button from '../Desserts/icon-decrement-quantity.svg'
import plus__button from '../Desserts/icon-increment-quantity.svg'

import '../Desserts/Cart.css'

const Cart = (props) => {
    const{image, p1, foodName, price} = props
    const[count, setCount] = useState(0);
    const[showAddProduct, setShowAddProduct] = useState(false);

    const decrementCount = ()  => {
      setCount((prevCount) => prevCount <= 0 ? prevCount === 0: prevCount -1 ) 
    }
    const incrementCount = ()  => {
      setCount(prevCount => prevCount + 1 )
    }

    function addProduct(){
     setShowAddProduct(true)? setShowAddProduct(false): setShowAddProduct(true)
    }

  return (
    <>
    <div className="image_container">
        <img className='food_img' src={image} alt="food-picture" />

        <button onClick={addProduct} className='add_button' >
        <img src={cartimage} alt="cart-image" />
        <span>Add to cart</span>
        </button>

        <button className={showAddProduct?  "add_button_selected active": "add_button_selected"} >
          <div className="sign_div" onClick={decrementCount}>
          <img src={minus__button } alt="cart-image" />
          </div>
          <span className='text-white'>{count}</span>
          <div className="sign_div" onClick={incrementCount}>
        <img src={plus__button} alt="cart-image" />

          </div>

        
   

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