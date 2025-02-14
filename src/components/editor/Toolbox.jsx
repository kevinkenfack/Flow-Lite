import React, { useEffect, useState, useCallback } from 'react'
import { useKeyPress, useOnSelectionChange, useReactFlow } from '@xyflow/react'
import NodeEdit from './NodeEdit'
import TextEdit from './TextEdit'
import EdgeEdit from './EdgeEdit'
import NodeSelect from './NodeSelect'
import { PiPlusBold, PiTextTBold } from 'react-icons/pi'

const Toolbox = ({addNode, updateNode, updateEdge, updateDataEdge}) => {

  // Local state to track whether node selection is visible and the currently selected node or edge
  const [nodeSelection, setNodeSelection] = useState(false)
  const [selected, setSelected] = useState({node: null, type: null})
  const [selectedNodes, setSelectedNodes] = useState([]);
  const [selectedEdges, setSelectedEdges] = useState([]);

  // Custom hook for flow position conversion
  const { screenToFlowPosition, deleteElements} = useReactFlow();
 
  // Hooks for tracking keyboard key presses (Space and Escape)
  const spacePressed = useKeyPress('Space');
  const escPressed = useKeyPress('Escape');

  // Toggle the node selection panel visibility
  const handleShowNodeSelection = () => {
    setSelected({node: null, type: null});
    setNodeSelection(prev => !prev);
  }

  const handleAddElement = (type) => {
    // Cacluclate position of the flow
    // When added by click/tap add new node on fixed position just right to the toolbox
    const position = screenToFlowPosition({x: 350,y: 100});
    addNode(type, position);
  }

  // Function to add an annotation (text) node
  const handleAddAnnotation = () => {
    const position = screenToFlowPosition({x: 350,y: 100});
    addNode('annotation', position);
  }

  // Memoized callback to handle node and edge selection changes
  const onChange = useCallback(({ nodes, edges }) => {
    setSelectedNodes(nodes);
    setSelectedEdges(edges);
  }, []);
  

  // Hook to listen for selection changes in the flow (nodes/edges)
  useOnSelectionChange({onChange});


  // Handle updates when nodes or edges are selected
  useEffect(() => {
    // Get last selected node or edge
    if(selectedNodes.length > 0) {
      const lastSelectedNode = selectedNodes.at(-1) // Get the last selected node
      const isTextNode = lastSelectedNode.type === 'annotation' // Check if it's a text (annotation) node
      setNodeSelection(false);
      setSelected({node: selectedNodes.at(-1), type: isTextNode ? 'text' : 'node'})
    } else if(selectedEdges.length > 0) {
      setNodeSelection(false);
      setSelected({node: selectedEdges.at(-1), type: 'edge'});
    } else {
      setSelected({node: null, type: null});
    }

  }, [selectedNodes, selectedEdges])

  // Cleanup effect to reset selection
  useEffect(() => {
    return() => {
      setSelected({node: null, type: null})
    }
  }, [])

  // Handle keyboard shortcuts for toggling node selection or closing it
  useEffect(() => {

    if(spacePressed) {
      setNodeSelection(prev => !prev)
      setSelected({node: null, type: null})
    } 

    if(escPressed) {
      setNodeSelection(false)
    }

  },[spacePressed, escPressed] )

  return (
    <div className={'absolute left-4 top-[72px] overflow-hidden flex items-start z-10 ' + (nodeSelection && 'bottom-[74px]')}>

      {/* Toolbox panel for node and annotation selection */}
      <div className='bg-white border p-1 rounded-md flex flex-col gap-1'>
        <button className='hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-2'  onClick={handleShowNodeSelection} >
          <PiPlusBold size={16}/> 
        </button>
        <button className='hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-2' onClick={handleAddAnnotation}>
          <PiTextTBold size={16}/> 
        </button>
      </div>

      {/* Node adding  */}
      { nodeSelection && <NodeSelect handleAddElement={handleAddElement} />}
      
      {/* Node and edge editor */}
      {selected.node && 
        <div className='bg-white rounded-lg mt-0 ml-2 border w-66'>
          {selected.type === "text" && <TextEdit node={selected.node} updateNode={updateNode} deleteElements={deleteElements}/> }
          {selected.type === "node" && <NodeEdit node={selected.node} updateNode={updateNode} deleteElements={deleteElements}/> }
          {selected.type === "edge" && <EdgeEdit edge={selected.node} updateEdge={updateEdge} updateDataEdge={updateDataEdge} deleteElements={deleteElements} /> }
        </div>
      }
    </div>
  )
}

export default Toolbox;