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
// {
//   id:3,
//   name:'LAVA',
//   quantity:4,
//   price:500
// }

]);


const [quantity, setQuantity] = useState(0)

  return (
    <div>
    <Navbar 
      quantity={quantity}
    />
    <Cart 
      products={products} 
      setProducts={setProducts} 
      setQuantity={setQuantity}
      quantity={quantity}
    />
    </div>
  );
}

export default App;
