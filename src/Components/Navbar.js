import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = ({quantity, TotalQuantity}) => {
  return (
    <div>
      <ul className='nav'>
            <li>Add Your Cart List</li>
            {/* <li><IoBagCheckOutline /> {quantity}</li> */}
            <li><IoBagCheckOutline /> {TotalQuantity}</li>

      </ul>
    </div>
  )
}

export default Navbar
