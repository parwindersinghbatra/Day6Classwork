import React, { useState } from 'react'
import './Cart.css'

const Cart = ({ products, setProducts, setQuantity,  quantity}) => {
  
const [total, setTotal] = useState(0);

function Increase(id){

  let tempProduct = products;
  tempProduct.map((product) =>{
    if(product.id === id ){
      product.quantity += 1
      setTotal(total + product.price) 
      setQuantity(quantity + 1)
    }
    return product;
    
  })
  // console.log(...tempProduct)
  let temp = [...tempProduct]
  setProducts(temp)
}


function Decrease(id){
  let tempProduct = [...products];
  tempProduct.map((product) =>{


if(product.id === id && product.quantity >= 0 ) 
    {
        product.quantity -= 1
      setTotal(total - product.price)
      setQuantity(quantity - 1)
    }
    return product;
  })
  
  // console.log(...tempProduct)
  setProducts([...tempProduct])
}

function removeProduct(id){
  let tempProducts = [...products];
    let arr = tempProducts.filter((product) =>{
        if(product.id === id)
        {
            setTotal(total - product.quantity * product.price)
            setQuantity(quantity - product.quantity)
        }
        return product.id !== id

    })
    setProducts(arr)
  }
  return (
    <>
    <div className='container'>
      { products.length <= 0 && <header><h3> is currently empty</h3></header> }
      {
        products.map((product, index) =>{
          return <div key={product.id}>
            
            <header>
        <h1>Shopping Cart</h1>
    </header>
    
        <div className="product">
        {/* <img src="product2.jpg" alt="Product 2" /> */}
        <div className="product-details">
                <h2>{product.name}</h2>
                
                <p class="product-price">{product.price}</p>
                <p onClick={() =>{
              removeProduct(product.id)
            }}>Remove</p>
            </div>
            <div class="quantity">
                <button onClick={() => 
              {
                Decrease(product.id)
                }
                }>-</button>
                <input type="text" value={product.quantity} readOnly />
                <button onClick={() => 
              {
                Increase(product.id)
                }
                }>+</button>
            </div>
          </div>
          <div class="total">
            Total:  {total} 
        </div>
        <button className="checkout-btn" onClick={() => {
          setProducts([])
          setTotal(0)
          setQuantity(0)
        }}>Clear Cart</button>
      </div>
          
        })
      }    
    </div>
</>
  )
}

export default Cart
