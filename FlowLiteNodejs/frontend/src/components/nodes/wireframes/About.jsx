import Browser from './Browser'
import {Footer, Hero4} from './sections'

const About = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Hero4 />
      <Footer />
    </Browser>
  )
}

export default About