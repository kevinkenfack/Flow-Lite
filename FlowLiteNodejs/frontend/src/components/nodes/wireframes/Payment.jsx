import Browser from './Browser'
import {Footer, CreditCard} from './sections'

const Payment = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <CreditCard />
      <Footer />
    </Browser>
  )
}

export default Payment