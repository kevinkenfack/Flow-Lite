import Browser from './Browser'
import { ThankYou as ThankYouSection, Footer, Navigation } from './sections'

const ThankYou = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <ThankYouSection/>
      <Footer/>
    </Browser>
  )
}

export default ThankYou