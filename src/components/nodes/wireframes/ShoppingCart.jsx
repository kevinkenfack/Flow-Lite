import Browser from './Browser'
import {Footer, ShoppingCart as ShoppingCartSection} from './sections'

const ShoppingCart = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <ShoppingCartSection />
      <Footer />
    </Browser>
  )
}

export default ShoppingCart