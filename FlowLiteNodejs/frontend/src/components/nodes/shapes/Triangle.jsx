import { colors } from '../../colors'
import Resizer from '../Resizer'

const Triangle = ({data, selected, width, height, id}) => {

  // Default color is 'gray' if no color is provided in data
  const color = data.color || "gray";
  
  // Function to return the border color based on the circle's color
  const getBorderColor = () => {
    if(colors[color]) {
      return colors[color].stroke;
    }
  }

  // Set default width and height
  const nodeWidth = width || 70;
  const nodeHeight = height || 70;

  return (
     // Wrap the rectangle inside the Resizer component
    <Resizer selected={selected} data={data} id={id}>
    <div className='relative' style={{width: nodeWidth, height: nodeHeight}}>
      <svg width={nodeWidth} height={nodeHeight}>
        <g>
          <path d={`M ${nodeWidth /2} 1 L ${nodeWidth - 2} ${nodeHeight - 2} L 0 ${nodeHeight - 2} L ${nodeWidth /2} 1 Z`} strokeWidth="1" strokeLinecap='round' stroke={getBorderColor(color)} className={colors[data.color].fillClass}/>
        </g>
      </svg>
      <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
          <span className='font-bold text-[10px] text-nowrap'>
            {data.label} 
          </span>
        </div>
    </div>
    </Resizer>
  )
}

export default Triangle;