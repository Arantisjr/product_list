import './App.css'
import Cart from './components/Desserts/Cart'
import { CartProduct } from './cartproduct'
import CartDisplay from './components/Menu/CartDisplay'

function App() {

  return (
    <>
    <div className="main_container">
      <h1 className='text-4xl font-bold'>
       Desserts
      </h1>
      {
        CartProduct.map((products) => <Cart key ={products.id} {...products} /> )
      }
      <CartDisplay />
    </div>
    </>
  )
}

export default App
