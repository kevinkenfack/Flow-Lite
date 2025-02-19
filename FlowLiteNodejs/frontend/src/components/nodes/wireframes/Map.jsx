import Browser from './Browser'
import {Footer, Map as MapSection} from './sections'

const Map = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <MapSection />
      <Footer />
    </Browser>
  )
}

export default Map