import { useEffect, useRef, useState } from 'react'
import { PiPlusBold, PiXBold } from 'react-icons/pi'
import Group from './Group';

const Groups = ({groups, addGroup, changeColor, deleteGroup, clearGroupInFlows}) => {

  // State to manage the name of a new group
  const [newGroupName, setNewGroupName] = useState('');

  // State to manage whether the add group form is active or not
  const [formActive, setFormActive] = useState(false);

  // Reference to focus on the input when the form is active
  const formNameRef = useRef()

  const handleAddGroup = () => {
    if(newGroupName.length > 0) {
      addGroup(newGroupName)
      setFormActive(false)
      setNewGroupName('')
    }
  }

  const handleCencel = () => {
    setFormActive(false)
    setNewGroupName('')
  }

  // Effect hook to focus on the input field when the form is active
  useEffect(() => {
    if(formActive && formNameRef.current) {
      formNameRef.current.focus();
    }
  }, [formActive])

  return (
    <div>
      <div className="my-4 text-xs font-medium text-gray-500">Groups</div>

      {/* Group list */}
      {groups.map(group => <Group key={group.id} group={group} changeColor={changeColor} deleteGroup={deleteGroup} clearGroupInFlows={clearGroupInFlows}/>)}

      {/* Group form */}
      {formActive &&
        <div className='flex mt-2 border rounded-md h-7 overflow-hidden bg-white'>
          <input ref={formNameRef} className='w-full p-2 outline-none' value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddGroup()}></input>
          <button onClick={handleAddGroup} className='border-l text-xs hover:bg-gray-50 active:bg-gray-100 px-2.5'>
            Add
          </button>
          <button onClick={handleCencel} className='border-l hover:bg-gray-50 active:bg-gray-100 px-1'>
            <PiXBold />
          </button>
        </div>
      }

      {/* Add group */}
      <button onClick={() => setFormActive(true)} className='flex items-center gap-1 mt-3 bg-white px-2 py-1 rounded-md border w-full justify-center text-xs hover:bg-gray-50 active:bg-gray-100'>
        <PiPlusBold />Add new group
      </button>
    </div>
  )
}


export default Groups;