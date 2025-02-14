import Browser from './Browser'
import {Footer, Hero2} from './sections'

const Landing = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Hero2 />
      <Footer />
    </Browser>
  )
}

export default Landing