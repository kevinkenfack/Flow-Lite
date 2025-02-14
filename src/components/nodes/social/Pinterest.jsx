import { colors } from '../../colors'
import { FaPinterest } from 'react-icons/fa'
import Wrapper from './Wrapper'

const Pinterest = ({data, selected, id}) => {
  return (
    <Wrapper data={data} id={id} selected={selected} >
      <div className='absolute -top-7 left-1/2 -translate-x-1/2'>
        <span className='font-bold text-[10px] text-nowrap'>
          {data.label} 
        </span>
      </div>
      <div className={"rounded-md w-9 h-9 flex items-center justify-center bg-white border " + colors[data.color].borderClass}>
        <FaPinterest className='text-[#FF0000]' size={20} />
      </div>
    </Wrapper>
  )
}

export default Pinterest;