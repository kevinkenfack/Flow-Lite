import Browser from './Browser'
import {Footer, HeroText, Stars} from './sections'

const Review = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <HeroText/>
      <Stars />
      <Footer />
    </Browser>
  )
}

export default Review