import React from 'react'
  
import CustomButton from '../custom-button/custom-button'

import './cart-dropdown.styles.scss'

 const CardDropdown = () =>(
   <div className='cart-dropdown'>
    <div className='cart-items'>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
   </div>
 );

 export default CardDropdown