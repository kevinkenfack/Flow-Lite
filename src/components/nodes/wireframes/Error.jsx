import Browser from './Browser'
import {BigTextBlock, Footer} from './sections'

const Error = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <BigTextBlock text='404'/>
      <Footer />
    </Browser>
  )
}

export default Error