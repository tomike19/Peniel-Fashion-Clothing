import React from 'react'
import {connect} from 'react-redux'

import {toggleCartHidden} from '../../redux/cart/cart-action'
 
import {ReactComponent as ShoppingIcon} from '../../component/assets/shopping-bag.svg.svg'


import './cart-icon.styles.scss'


const CartIcon = ({toggleCartHidden}) =>(
  <div className= 'cart-icon' onClick={toggleCartHidden}>
<ShoppingIcon className='shopping-icon'/>
<span className='item-count'>0</span>
  </div>
)


const mapToDispatchToProps= dispatch =>({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null,mapToDispatchToProps) (CartIcon)