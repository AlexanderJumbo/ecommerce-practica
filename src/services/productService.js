export const getProductsFromAPI = async () => {
  const request = await fetch('https://dummyjson.com/products')
  const response = await request.json()
  const { products } = response

  return products
}
