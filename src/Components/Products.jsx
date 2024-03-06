import { useCart } from '../hooks/useCart'
import './Products.css'

export function Products ({ products }) {
  const { addToCart, cart } = useCart()
  console.log('Carrito', cart)

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => (
          <li key={product.id} className='product'>
            <p><img src={product.thumbnail} alt={product.title} /></p>
            <h3>{product.title} - ${product.price} </h3>
            <button style={{ backgroundColor: '#09f' }} onClick={() => addToCart(product)}>Add</button>
            {/* <button style={{ backgroundColor: '#09f' }} onClick={() => deleteToCart(product)}>Remove</button> */}
          </li>
        ))}
      </ul>
    </main>
  )
}
