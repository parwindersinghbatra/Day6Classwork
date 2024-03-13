import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { useState } from 'react';



function App() {
  
const [products, setProducts] = useState([
{
  id:1,
  name:'Samsung',
  quantity:1,
  price:2000
},
{
  id:2,
  name:'Nokia',
  quantity:2,
  price:1000
},
{
  id:3,
  name:'LAVA',
  quantity:4,
  price:500
}
]);


const [quantity, setQuantity] = useState(0)

const getTotalCost = () => {
  let totalCost = 0;
  products.forEach(product => {
    totalCost += product.quantity * product.price;
  });
  return totalCost;

}
const getTotalQuantity = () => {
  let TotalQuantity = 0;
  products.forEach(product => {
    TotalQuantity += product.quantity;
  });
  return TotalQuantity;
}


  return (
    <div>
    <Navbar 
      quantity={quantity}
      TotalQuantity={getTotalQuantity()}
      
    />
    <Cart 
      products={products} 
      setProducts={setProducts} 
      setQuantity={setQuantity}
      quantity={quantity}
      totalCost={getTotalCost()}
    />
    </div>
  );
}

export default App;
