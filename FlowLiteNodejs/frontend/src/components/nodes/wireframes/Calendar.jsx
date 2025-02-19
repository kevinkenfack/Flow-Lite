import Browser from './Browser'
import { Calendar as CalendarSection, Footer } from './sections'

const Calendar = ({data, selected}) => {
  return (
    <Browser data={data} selected={selected}>
      <CalendarSection/>
      <Footer />
    </Browser>
  )
}

export default Calendar