import { useState } from 'react'
import { Handle, Position} from '@xyflow/react'
import { colors } from '../../colors';

// Default style for the handles
const DEFAULT_HANDLE_STYLE = {
  width: 8,
  height: 8,
  bottom: -4,
  leftt: -4,
  background: '#313131'
};

const Browser = ({children, data, selected}) => {

  // State to track mouse hover status
  const [mouseOver, setMouseOver] = useState(false);

  // Destructure preview and pointers properties from data,
  const preview = data?.preview || false;
  const pointers = data.disablePointers || false;

  return (
    <>
      {/* If preview is enabled, render a simplified view of the content */}
      {preview ? (
      <div className="bg-white p-1 min-w-20 text-[10px] flex flex-col gap-1 border rounded ">
        {children}
      </div>
      ) : (
      // Otherwise, render the full content
      <div onMouseOver={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} className={'bg-white border rounded cursor-pointer overflow-hidden ' + (colors[data.color].borderClass) + " " + (selected && ' ring-4 ring-gray-300 ring-opacity-40')}>
        
        {/* Label rendering at the top, positioned above the component */}
        <div className='absolute bottom-full left-1/2 -translate-x-1/2 w-44 text-center'>
          <div className='font-semibold text-[10px] whitespace-pre-wrap mb-1'>
            {data.label} 
          </div>
        </div>

        {/* Conditionally render URL at the bottom if provided  */}
        {data.url && 
        <div className='absolute -bottom-7 left-1/2 -translate-x-1/2 bg-white border rounded-md flex px-2 py-0.5'>
            <a href={data.url} target="_blank" className='font-medium text-[10px] text-nowrap hover:text-blue-600'>{data.url}</a> 
        </div>
        }

        {/* Render handles only if selected or mouse is over the component */}
        <div className={((selected || mouseOver) && !pointers) ? ' opacity-100' : ' opacity-0'}>
          <Handle type='target' position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE}}/>
          <Handle type='source' position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE}}/>
        </div>

        <div>
          <div className={"h-4 flex justify-start items-center space-x-0.5 px-1.5 " + (colors[data.color].bgClass)}>
              <span className="w-1 h-1 rounded-full bg-red-400"></span>
              <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
              <span className="w-1 h-1 rounded-full bg-green-400"></span>
          </div>
          <div className="bg-white p-1 min-w-20 text-[10px] flex flex-col gap-1">
            
            {/* Render actual page */}
            {children}
          </div>
        </div>
      </div>
      )}
    </>
    
  )
}

export default Browser