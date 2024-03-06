import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export const useFilter = () => {
  /* const [filtro, setFiltro] = useState({
    category: 'all',
    price: 0
  })
*/
  const { filters, setFilters } = useContext(FiltersContext)

  const filtrarProductos = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.price && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  return { filtrarProductos, setFilters, filters }
}
