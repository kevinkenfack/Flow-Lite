import FlowViewer from '../components/view/FlowViewer'
import ViewportControls from '../components/editor/ViewportControls'
import ErrorPage from './ErrorPage'
import { useParams } from 'react-router-dom'
import { ReactFlowProvider } from '@xyflow/react'
import useFlow from '../hooks/useFlow'

const View = () => {

  // Get the flowId from the URL parameters
  const { flowId } = useParams();

  // Get flow data, nodes, edges, and loading state
  const { flow, nodes, edges, loading } = useFlow(flowId);

  // If data is still loading, return nothing
  if(loading) return ;

  // If no flow exists, display error page
  if(!flow) return <ErrorPage/>;

  return (
    <div className='h-screen relative bg-gray-50 select-none'>
        <div className='absolute top-6 left-6'>
            <div className='font-semibold text-lg'>{flow.name}</div>
        </div>
        <ReactFlowProvider>
            <FlowViewer nodes={nodes} edges={edges}/>
            <ViewportControls />
        </ReactFlowProvider>
      </div>
  )
}

export default View;