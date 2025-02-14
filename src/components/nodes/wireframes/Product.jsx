import Browser from './Browser'
import {Footer, ProductDetail} from './sections'

const Product = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <ProductDetail />
      <Footer />
    </Browser>
  )
}

export default Product