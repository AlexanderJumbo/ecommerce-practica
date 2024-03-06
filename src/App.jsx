// import { products as initialProducts } from './mocks/products.json'
import { Products } from './Components/Products'
import { useFilter } from './hooks/useFilter'
import { Header } from './Components/header'
import { CartProvider } from './context/cart'
import { useProduct } from './hooks/useProduct'

function App () {
  const { filtrarProductos } = useFilter()
  const { products } = useProduct()
  const productos = filtrarProductos(products /* initialProducts */)

  return (
    <>
      <CartProvider>
        <Header />
        <Products products={productos} />
      </CartProvider>
    </>

  )
}

export default App
