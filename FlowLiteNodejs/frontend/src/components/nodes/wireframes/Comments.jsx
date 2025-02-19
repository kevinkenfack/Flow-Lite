import Browser from './Browser'
import { Comments as CommentsSection, Footer } from './sections'

const Comments = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <CommentsSection/>
      <Footer />
    </Browser>
  )
}


export default Comments