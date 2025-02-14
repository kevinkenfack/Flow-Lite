import Wrapper from './Wrapper'
import { SiGmail } from 'react-icons/si'
import { colors } from '../../colors'

const Gamil = ({data, selected, id}) => {
  return (
    <Wrapper data={data} id={id} selected={selected} >
      <div className='absolute -top-7 left-1/2 -translate-x-1/2'>
        <span className='font-bold text-[10px] text-nowrap'>
          {data.label} 
        </span>
      </div>
      <div className={"rounded-md w-9 h-9 flex items-center justify-center bg-white border " + colors[data.color].borderClass}>
        <SiGmail className='text-red-500' />
      </div>
    </Wrapper>
  )
}

export default Gamil;