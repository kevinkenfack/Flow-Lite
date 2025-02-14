import { colors } from '../../colors'
import Resizer from '../Resizer'

const RoundRectangle = ({data, selected, width, height, id}) => {

  // Default color is 'gray' if no color is provided in data
  const color = data.color || "gray";

  // Function to return the border color based on the circle's color
  const getBorderColor = () => {
    if(colors[data.color]) {
      return colors[data.color].stroke;
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
            <rect x={2} y={2} rx={10} width={nodeWidth - 4} height={nodeHeight - 4} strokeWidth="1" stroke={getBorderColor(color)} className={colors[data.color].fillClass}></rect>
          </g>
        </svg>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <div className='font-bold text-[10px]  p-2'>
              {data.label} 
            </div>
          </div>
      </div>
    </Resizer>
  )
}

export default RoundRectangle;