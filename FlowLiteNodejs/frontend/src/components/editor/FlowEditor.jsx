import {useCallback, useEffect, useMemo, useState} from 'react'
import { ReactFlow, Background, useReactFlow} from '@xyflow/react'
import { useDragDrop } from '../../context/DragDropContext'
import { useAppStore } from '../../store/app'
import { useShallow } from 'zustand/shallow'
import { toast } from 'sonner'
import nodesTypes from '../nodes'
import edgeTypes from '../edges'
import '@xyflow/react/dist/style.css'

const FlowEditor = ({nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode}) => {

  // Local states to track the selected node and copied node for copy-paste functionality
  const [selectedNode, setSelectedNode] = useState(null);
  const [copyNode, setCopyNode] = useState(null);

  // Get utilities from React Flow
  const { screenToFlowPosition, getNodes} = useReactFlow();

  // Get drag/drop type from context
  const {type} = useDragDrop();

  // Get global settings
  const { showGrid, snapToGrid} = useAppStore(useShallow((state) => ({showGrid: state.showGrid, snapToGrid: state.snapToGrid})))

  // Memoized custom nodes component mapping for better performance
  const customNodes = useMemo(() => 
    Object.fromEntries(
      Object.entries(nodesTypes).map(([key, val]) => [key, val.component])
    ), 
    []
  );

  // Callback function to handle drag over event (used to allow dropping nodes)
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
 
  // Handle node selection 
  const onSelection = (e) => {
    // Get the first selected node or set it to null if nothing is selected
    const getFirstSelectedNode = e.nodes[0] || null;
    setSelectedNode(getFirstSelectedNode)
  }

  // Handle node drop event
  const onDrop = useCallback((event) => {
    event.preventDefault();
 
    if (!type) {
      return;
    }

    const position = screenToFlowPosition({
      x: event.clientX - 40,
      y: event.clientY - 35,
    });

    addNode(type, position)
  },[screenToFlowPosition, type]);


  // Handle keydown events for copy and paste
  const handleKeyDown = (e) => {
    // Check if the Cmd or Ctrl key is pressed with the C key  - copy
    if ((e.metaKey || e.ctrlKey) && e.key === 'c') {
      if (selectedNode) {
        e.preventDefault();
        // Get the current state of node
        const currentNodesState = getNodes();
        const currentStateOfSelectedNode = currentNodesState.find(node => node.id === selectedNode.id);

        // Set the selected node as the copied node
        setCopyNode(currentStateOfSelectedNode);

        // Notification
        const nodeLabel = currentStateOfSelectedNode.data.label;
        toast(`Node copied to clipboard!`)
      } else {
        // Clean copied node if there is no selected node while copy
        setCopyNode(null);
      }
    }

    // Check if the Cmd or Ctrl key is pressed with the V key  - paste
    if ((e.metaKey || e.ctrlKey) && e.key === 'v') {
      if (copyNode) {
        e.preventDefault();
        // Calculate new position
        const position = {
          x: copyNode.position.x + 40,
          y: copyNode.position.y + 40,
        };

        // Add the copied node as a new node
        addNode(copyNode.type, position, copyNode.data);
      }
    }
  }

  // Effect hook to listen for keydown events and manage copy-paste logic
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedNode, copyNode]);

  return (
    <div className='h-full w-full p-5 pt-0'>
      <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={customNodes}
          edgeTypes={edgeTypes}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onSelectionChange={onSelection}
          fitView
          fitViewOptions={{ padding: 0.4,maxZoom:1.4}}
          defaultViewport={{zoom: 1.4, x: 0, y: 0}}
          snapToGrid={snapToGrid}
          >
        {showGrid && <Background gap={15} /> }
      </ReactFlow>

    </div>
  )
}

export default FlowEditor;