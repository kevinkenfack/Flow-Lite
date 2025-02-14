import Browser from './Browser'
import {Footer, Hero5} from './sections'

const Landing2 = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Hero5 />
      <Footer />
    </Browser>
  )
}

export default Landing2