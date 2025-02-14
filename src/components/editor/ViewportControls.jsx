import { useReactFlow } from '@xyflow/react'
import { AiOutlineExpand } from 'react-icons/ai'
import { PiMinus, PiPlusBold } from 'react-icons/pi'

const ViewportControls = () => {

  // Get the functions from the react flow
  const {zoomIn, zoomOut, fitView} = useReactFlow()

  // Set options for the fit view behavior
  const fitViewOptions = { padding: 0.4, maxZoom:1.4}

  return (
    <div className='absolute left-1/2 -translate-x-1/2 bottom-4 bg-white border p-1 rounded-md'>
        <div className='flex items-center gap-px'>
          <button onClick={() => zoomOut()} className='hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-1.5'><PiMinus size={18}/></button>
          <button onClick={() => fitView(fitViewOptions)} className='hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-1.5'><AiOutlineExpand size={18} /></button>
          <button onClick={() => zoomIn()} className='hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-1.5'><PiPlusBold size={16} /></button>
        </div>
    </div>
  )
}

export default ViewportControls;