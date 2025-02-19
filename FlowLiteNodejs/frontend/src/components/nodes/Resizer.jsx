import { useState} from 'react'
import { Handle, Position, NodeResizer } from '@xyflow/react';

const Resizer = ({selected, children, data, id, handles = true}) => {

  // State to track mouse hover status for showing/hiding handles
  const [mouseOver, setMouseOver] = useState(false);

  // Style for handles
  const DEFAULT_HANDLE_STYLE = {
    width: 8,
    height: 8,
    background: 'black',
  };

  // Style for resizing handles
  const RESIZE_HANDLE_STYLE = {
    width: 10,
    height: 10,
    background: '#fbbf24',
    borderRadius: 10,
    border: '1px solid #f9fafb',
    opacity: selected ? 1 : 0
  };

  // Style for line handles for resize
  const LINE_HANDLE_STYLE = {
    border: '0.5px solid #d1d5db66',
    opacity: selected ? 1 : 0
  };
  
  
  // Get preview and pointers properties from the data object
  const preview = data?.preview || false;
  const pointers = data.disablePointers || false;

  return (
    <div onMouseOver={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} >
      
      {/* If preview is true, render children without resizing handles or flow handles */}
      {preview ? 
      <>{children}</> 
      : 
      <>
        <NodeResizer
          isVisible={selected}
          minWidth={30}
          minHeight={30}
          handleStyle={{...RESIZE_HANDLE_STYLE}}
          lineStyle={{...LINE_HANDLE_STYLE}}
        />
        {children}

        {/* Conditionally render handles if the component is selected or mouse is hovering */}
        {handles && 
          <div className={((selected || mouseOver) && !pointers) ? ' opacity-100' : ' opacity-0'}>
            <Handle id={'a' + id} type="target" position={Position.Top} style={{ ...DEFAULT_HANDLE_STYLE}}/>
            <Handle id={'b' + id} type="target" position={Position.Left} style={{ ...DEFAULT_HANDLE_STYLE}}/>
            <Handle id={'c' + id} type="source" position={Position.Bottom} style={{ ...DEFAULT_HANDLE_STYLE}}/>
            <Handle id={'d' + id} type="source" position={Position.Right} style={{ ...DEFAULT_HANDLE_STYLE}}/>
          </div>
        }
      </>
      }
    </div>
  )
}

export default Resizer;