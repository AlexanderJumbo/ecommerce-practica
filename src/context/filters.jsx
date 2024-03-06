import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  return (
    <FiltersContext.Provider value={{
      setFilters, filters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
