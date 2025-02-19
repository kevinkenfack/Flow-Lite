import Resizer from '../Resizer'

const Annotation = ({data, selected, width, height, id}) => {

  // Default color is 'gray' if no color is provided in data
  const color = data.color || "gray";

  // Set default width and height
  const nodeWidth = width || 70
  const nodeHeight = height || 70

  return (
    <Resizer selected={selected} data={data} id={id} handles={false}>
      <div style={{width: nodeWidth, height: nodeHeight}} className='p-2 overflow-hidden'>
        <div className='text-xs whitespace-pre-line'>
          {data.label} 
        </div>
      </div>
    </Resizer>
  )
}

export default Annotation