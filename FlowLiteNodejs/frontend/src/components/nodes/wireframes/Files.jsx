import Browser from './Browser'
import {Footer, FilesSection} from './sections'

const Files = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <FilesSection />
      <Footer />
    </Browser>
  )
}

export default Files