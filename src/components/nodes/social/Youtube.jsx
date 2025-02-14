import { colors } from '../../colors'
import { FaYoutube } from 'react-icons/fa'
import Wrapper from './Wrapper'

const Youtube = ({data, selected, id}) => {
  return (
    <Wrapper data={data} id={id} selected={selected} >
      <div className='absolute -top-7 left-1/2 -translate-x-1/2'>
        <span className='font-bold text-[10px] text-nowrap'>
          {data.label} 
        </span>
      </div>
      <div className={"rounded-md w-9 h-9 flex items-center justify-center bg-white border " + colors[data.color].borderClass}>
        <FaYoutube className='text-[#FF3000]' size={22} />
      </div>
    </Wrapper>
  )
}

export default Youtube;