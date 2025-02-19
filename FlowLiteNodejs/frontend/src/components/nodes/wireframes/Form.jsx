import Browser from './Browser'
import { Form as FormSection, Footer } from './sections'

const Form = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <FormSection/>
      <Footer/>
    </Browser>
  )
}

export default Form