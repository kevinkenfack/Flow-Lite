import {useMemo} from 'react'
import { ReactFlow} from '@xyflow/react'
import nodesTypes from '../nodes'
import edgeTypes from '../edges'
import '@xyflow/react/dist/style.css'

const FlowViewer = ({nodes, edges}) => {

  // Create a memoized object containing node components
  const customNodes = useMemo(() => 
    Object.fromEntries(
      Object.entries(nodesTypes).map(([key, val]) => [key, val.component])
    ), 
    [nodesTypes]
  );

  // Modify the nodes to disable pointer interactions for view mode
  const previewNodes = nodes.map(node => ({...node, data: {...node.data, disablePointers : true}, selected: null }))

  return (
    <div className='h-full w-full p-5 pt-0'>
      <ReactFlow
          nodes={previewNodes}
          edges={edges}
          nodeTypes={customNodes}
          edgeTypes={edgeTypes}
          fitView
          edgesFocusable={false}
          nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          draggable={false}
          fitViewOptions={{ padding: 0.4,maxZoom:1.4}}
          defaultViewport={{zoom: 1.4, x: 0, y: 0}}
          >
      </ReactFlow>

    </div>
  )
}

export default FlowViewer