import Toolbox from '../components/editor/Toolbox'
import Nav from '../components/editor/Nav'
import FlowEditor from '../components/editor/FlowEditor'
import GridControls from '../components/editor/GridControls'
import ViewportControls from '../components/editor/ViewportControls'
import KeyboardShortcuts from '../components/editor/KeyboardShortcuts'
import ErrorPage from './ErrorPage'
import { ReactFlowProvider } from '@xyflow/react'
import { DDProvider } from '../context/DragDropContext' 
import { useParams } from 'react-router-dom'
import { Toaster } from 'sonner'
import useFlow from '../hooks/useFlow'

const Editor = () => {

  // Get the flow Id from the URL parameters
  const { flowId } = useParams();

  // Get the flow data
  const { flow, loading, addNode, updateNode, updateEdge, updateDataEdge, changeName, nodes, edges, onNodesChange, onEdgesChange, onConnect} = useFlow(flowId);

  // If data is still loading, return
  // TODO add spinner
  if(loading || flow === null) return;

  // If no flow exists, display error page
  if(!loading && !flow) return <ErrorPage/>;

  return (
    <div>
      <div className='h-screen relative bg-gray-50 select-none'>
        {/* Notification */}
        <Toaster />

        {/* Flow context */}
        <ReactFlowProvider>
          <Nav flow={flow} changeName={changeName}/>

          {/* Drag and drop context */}
          <DDProvider>
            <Toolbox addNode={addNode} updateNode={updateNode} updateEdge={updateEdge} updateDataEdge={updateDataEdge}/>
            <FlowEditor nodes={nodes} addNode={addNode} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} />
          </DDProvider>

          {/* Controls */}
          <GridControls />
          <ViewportControls />
        </ReactFlowProvider>

        {/* Keyboard shortcusts panel */}
        <KeyboardShortcuts/>
      </div>
    </div>
  )
}

export default Editor