import Browser from './Browser'
import {Footer, SearchForm} from './sections'

const Search = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <SearchForm />
      <Footer />
    </Browser>
  )
}

export default Search