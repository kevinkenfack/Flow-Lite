import Browser from './Browser'
import {Article, Footer} from './sections'

const Blog = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Article />
      <Article />
      <Article />
      <Footer />
    </Browser>
  )
}

export default Blog