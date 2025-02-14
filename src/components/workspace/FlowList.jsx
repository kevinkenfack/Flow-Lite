import { PiPlusBold } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { colors } from '../colors'
import Card from './Card'
import Actions from './Actions'

const FlowList = ({flows, addFlow, listDisplay = false, deleteFlow, groups, updateFlow}) => {

  // Hook to navigate between routes
  const navigate = useNavigate();

  // Create new flow and navigating to its editor page
  const handleAddNewFlow = async () => {
    const newFlow = await addFlow();
    navigate(`/editor/${newFlow.id}`);
  }

  // Navigate to the editor page of an existing flow
  const handleOpenFlow = (flowId) => {
    navigate(`/editor/${flowId}`);
  }

  // Returns the CSS class for the background and border color of a flow's group
  const groupColor = (groupId) => {
    const group = groups.find(group => group.id === groupId);
    if(group) {
      const color = group.color;
      return colors[color].bgClass + ' border ' + colors[color].borderClass;
    }
    return '';
  }

  // Returns the group name from groups
  const groupName = (groupId) => {
    const group = groups.find(group => group.id === groupId);
    if(group) {
      return group.name;
    }
    return '';
  }

  return (
    <div>
    {listDisplay ? 
    <>
    {/* List view */}
      <div className='flex flex-col gap-1'>
      {
        flows.length === 0 && <div className='text-sm text-gray-500 font-normal mt-2'>Empty list</div>
      }

      {/* Render each flow*/}
      {flows.map(flow => 
      <div className='relative' key={flow.id}>
        <div onClick={() => handleOpenFlow(flow.id)}  className='border rounded-md p-2 px-4 hover:border-blue-600 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <div className='text-sm font-semibold'>
              {flow.name}
            </div>
            <div className={'text-xs py-0.5 px-1 rounded ' + groupColor(flow.group)}>
              {groupName(flow.group)}
            </div>
          </div>
        </div>
        <Actions flow={flow} deleteFlow={deleteFlow}  groups={groups} updateFlow={updateFlow}/>
        </div>
      )}
      </div>
    </> : 
    <>
    {/* Cards */}
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <button onClick={handleAddNewFlow} className='border rounded-md h-[172px] p-2 w-full flex flex-col items-center justify-center gap-2 hover:border-blue-500'>
          <PiPlusBold />
          <div className='text-xs font-semibold '>
            Create new
          </div>
        </button>
        {flows.map(flow => <Card key={flow.id} flow={flow} deleteFlow={deleteFlow} groups={groups}  updateFlow={updateFlow}/>)}
      </div>
    </>}
    </div >
  )
}

export default FlowList;