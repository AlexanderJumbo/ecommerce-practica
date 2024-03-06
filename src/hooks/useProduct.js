import { useEffect, useState } from 'react'
import { getProductsFromAPI } from '../services/productService'

export const useProduct = () => {
  const [products, setProducts] = useState([])
  console.log('🚀 ~ useProduct ~ products:', products)

  const fetching = () => {
    /* fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        // console.log('data', data)
        setProducts(data.products)
      })
*/
    getProductsFromAPI().then(products => setProducts(products))
  }

  useEffect(() => {
    fetching()
  }, [])

  return { products }
}
