import Browser from './Browser'
import {Footer, ProductList} from './sections'

const Products = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <ProductList />
      <Footer />
    </Browser>
  )
}

export default Products