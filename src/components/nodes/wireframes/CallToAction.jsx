import Browser from './Browser'
import { CallToAction as CallToActionSection, Footer, Navigation } from './sections'

const CallToAction = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Navigation />
      <CallToActionSection/>
      <Footer/>
    </Browser>
  )
}

export default CallToAction