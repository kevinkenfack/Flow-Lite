import Browser from './Browser'
import {Footer, Charts} from './sections'

const Dashboard = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <Charts />
      <Footer />
    </Browser>
  )
}

export default Dashboard