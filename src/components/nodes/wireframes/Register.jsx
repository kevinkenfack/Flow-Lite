import { Hero, Footer, Register as RegisterSection } from "./sections"
import Browser from './Browser';

const Register = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <RegisterSection/>
      <Footer />
    </Browser>
  )
}

export default Register
