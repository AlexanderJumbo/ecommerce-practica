import { Cart } from './Cart'
import { Filter } from './Filter'

export function Header () {
  return (
    <>
      <h1>Ecommerce</h1>
      <Cart />
      <Filter />
    </>
  )
}
