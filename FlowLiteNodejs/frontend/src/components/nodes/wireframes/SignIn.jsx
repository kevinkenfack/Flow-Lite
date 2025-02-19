import Browser from "./Browser"
import { Footer, SignIn as SignUp } from "./sections"

const SignIn = ({data, selected}) => {
  return (
    <Browser data={data}  selected={selected}>
      <SignUp data={data}/>
      <Footer />
    </Browser>
  )
}

export default SignIn