import FlowList from '../components/workspace/FlowList'
import { useOutletContext, useParams } from 'react-router-dom'

const GroupFlows = () => {

  // Get the group from the URL parameters
  const { groupName } = useParams()

  // Get flows data
  const {flows, groups, deleteFlow, updateFlow} = useOutletContext()

  // Filter flows by group
  const flowsByGroup = flows.filter(flow => flow.group === groupName)

  return (
    <div>
      <div className='mb-4'>
        <div className='text-xl font-semibold'>Group</div>
        <div className='text-sm text-gray-500'> View, manage, or update your flows.</div>
      </div>
      <FlowList flows={flowsByGroup} listDisplay deleteFlow={deleteFlow} groups={groups} updateFlow={updateFlow}/>
    </div>
  )
}

export default GroupFlows