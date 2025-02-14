import Browser from './Browser'
import {Footer, Table as TableSection} from './sections'

const Table = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <TableSection />
      <Footer />
    </Browser>
  )
}

export default Table