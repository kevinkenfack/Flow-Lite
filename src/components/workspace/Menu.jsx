import { NavLink } from 'react-router-dom'
import { CgMenuLeft } from 'react-icons/cg'
import Groups from './Groups'

// Menu renders the workspace and groups components
const Menu = ({groups, addGroup, changeColor, deleteGroup, clearGroupInFlows}) => {
  return (
    <div className='flex-1 p-6 flex flex-col gap-1 text-sm font-semibold'> 
      <Workspace />
      <Groups groups={groups} addGroup={addGroup} changeColor={changeColor} deleteGroup={deleteGroup} clearGroupInFlows={clearGroupInFlows} />
    </div>
  )
}

// Workspace renders Flows list
const Workspace = () => {
  return(
    <>
      <div  className="my-4 text-xs font-medium text-gray-500">Workspace</div>
      <NavLink className="[&.active]:bg-gray-100 hover:bg-gray-100 px-2 py-1 rounded-md flex items-center gap-2" to={"all"} >
        <CgMenuLeft /> Flows
      </NavLink>
    </>
  )
}

export default Menu;