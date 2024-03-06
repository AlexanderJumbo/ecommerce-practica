import { useFilter } from '../hooks/useFilter'
import './Filter.css'

export function Filter () {
  const { setFilters, filters } = useFilter()

  const filtrarCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  const filtrarPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      price: e.target.value
    }))
  }

  return (
    <header className='filter'>
      <div className='filter-price'>
        <input type='range' name='precio' id='precio' min={0} max={1000} onChange={filtrarPrice} /> ${filters.price}
      </div>
      <select name='category' id='' onChange={filtrarCategory}>
        <option value='all'>Todas</option>
        <option value='smartphones'>Celulares</option>
        <option value='laptops'>Portátiles</option>
      </select>
    </header>
  )
}
