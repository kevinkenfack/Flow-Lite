import Browser from './Browser'
import {Footer, Slideshow, Grid} from './sections'
import { LuStar } from 'react-icons/lu'

const Portfolio = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Slideshow />
      <Grid>
        <LuStar size={8}/>
      </Grid>
      <Footer />
    </Browser>
  )
}

export default Portfolio