import Browser from './Browser'
import {Footer, Pricing as PricingSection} from './sections'

const Pricing = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <PricingSection />
      <Footer />
    </Browser>
  )
}

export default Pricing