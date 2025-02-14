import { colors } from '../../colors'
import Resizer from '../Resizer'

const Circle = ({data, selected, width, height, id}) => {

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
    // Wrap the circle inside the Resizer component
    <Resizer selected={selected} data={data} id={id}>
      <div className='relative' style={{width: nodeWidth, height: nodeHeight}}>
        <svg width={nodeWidth} height={nodeHeight}>
          <g>
            {/* Ellipse element representing the circle */}
            <ellipse cx={nodeWidth / 2} cy={nodeHeight / 2} rx={nodeWidth / 2 - 2} ry={nodeHeight / 2 - 2} strokeWidth="1" stroke={getBorderColor(color)} className={colors[data.color].fillClass}></ellipse>
          </g>
        </svg>
        {/* Label centered inside the circle */}
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
            <span className='font-bold text-[10px] text-nowrap'>
              {data.label} 
            </span>
          </div>
      </div>
    </Resizer>
  )
}

export default Circle;