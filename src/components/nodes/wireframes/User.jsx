import Browser from './Browser'
import { User as UserSection, Footer, Navigation } from './sections'

const User = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <UserSection/>
      <Footer/>
    </Browser>
  )
}


export default User