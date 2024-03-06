import { useCart } from '../hooks/useCart'
import './Cart.css'

export function Cart () {
  const { cart, addToCart, emptyCart, deleteToCart } = useCart()
  console.log('carrito 2', cart)

  const isDisabled = cart.length < 1
  console.log('🚀 ~ Cart ~ isDisabled:', isDisabled)

  return (
    <>
      <label className='cart-button' htmlFor='cart'>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
          <path d='M17 17h-11v-14h-2' />
          <path d='M6 5l14 1l-1 7h-13' />
        </svg>
      </label>
      <input type='checkbox' id='cart' hidden />

      <aside className='cart'>
        <h1>Cart</h1>

        <button disabled={isDisabled} onClick={emptyCart}> Vaciar </button>

        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <h3>{item.title} - ${item.price} </h3>
              <footer>
                <button onClick={() => deleteToCart(item)}>x</button>
                <small>
                  Qty: {item.quantity}
                </small>
                <button onClick={() => addToCart(item)}>+</button>
              </footer>
            </li>
          ))}
        </ul>
      </aside>

    </>
  )
}
