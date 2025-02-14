import Wrapper from './Wrapper'
import { colors } from '../../colors'
import { SiX } from 'react-icons/si'

const XTwitter = ({data, selected, id}) => {
  return (
    <Wrapper data={data} id={id} selected={selected} >
      <div className='absolute -top-7 left-1/2 -translate-x-1/2'>
        <span className='font-bold text-[10px] text-nowrap'>
          {data.label} 
        </span>
      </div>
      <div className={"rounded-md w-9 h-9 flex items-center justify-center bg-white border " + colors[data.color].borderClass}>
        <SiX className='text-black' />
      </div>
    </Wrapper>
  )
}

export default XTwitter;