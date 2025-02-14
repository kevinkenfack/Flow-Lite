import Browser from './Browser'
import { Video as VideoSection, Footer, Navigation } from './sections'

const Video = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <VideoSection/>
      <Footer/>
    </Browser>
  )
}

export default Video