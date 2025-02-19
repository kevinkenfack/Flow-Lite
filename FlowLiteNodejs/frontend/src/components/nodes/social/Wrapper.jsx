import { useState} from 'react'
import { Handle, Position} from '@xyflow/react'

const Wrapper = ({data, children, id, selected}) => {

  const [mouseOver, setMouseOver] = useState(false);

  const DEFAULT_HANDLE_STYLE = {
    width: 8,
    height: 8,
  };

  const preview = data?.preview || false;
  const pointers = data.disablePointers || false;

  return (
    <div onMouseOver={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
      {!preview && 
      <div className={((selected || mouseOver) && !pointers) ? ' opacity-100' : ' opacity-0'}>
        <Handle id={'a' + id} type="target" position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE}}/>
        <Handle id={'b' + id} type="target" position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE}}/>
        <Handle id={'c' + id} type="source" position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE}}/>
        <Handle id={'d' + id} type="source" position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE}}/>
      </div>
      }
      {children}
    </div>
  )
}

export default Wrapper