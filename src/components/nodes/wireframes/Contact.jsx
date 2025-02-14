import Browser from './Browser'
import {Footer, ContactForm} from './sections'

const Contact = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <ContactForm/>
      <Footer />
    </Browser>
  )
}

export default Contact