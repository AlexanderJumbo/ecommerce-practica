import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  /* const [cart, setCart] = useState([])
  console.log('🚀 ~ Products ~ cart:', cart)

  const addToCart = (product) => {
    // console.log('Add ', product)
    const existProductInCart = cart.findIndex(item => item.id === product.id)
    if (existProductInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[existProductInCart].quantity += 1
      return setCart(newCart)
    }
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const deleteToCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      console.log('heu', productInCartIndex)
      // cart.splice(productInCartIndex, 1)
      setCart(prevState => prevState.filter(item => item.id !== product.id))
      // return setCart([...cart, newCart])
    }
  }

  return { addToCart, deleteToCart, cart } */

  const { addToCart, deleteToCart, cart, setCart, emptyCart } = useContext(CartContext)
  return { addToCart, deleteToCart, cart, setCart, emptyCart }
}
