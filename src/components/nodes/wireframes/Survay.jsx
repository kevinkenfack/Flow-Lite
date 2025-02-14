import Browser from './Browser'
import { Survay as SurvaySection, Footer, Navigation } from './sections'

const Survay = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <SurvaySection/>
      <Footer/>
    </Browser>
  )
}

export default Survay