import { useEffect, useRef, useState } from 'react'
import {  LuTrash2 } from 'react-icons/lu'
import {  PiDotsThreeVertical, PiDotsThreeVerticalBold } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import { colors } from '../colors'

const Group = ({group, changeColor, deleteGroup, clearGroupInFlows}) => {
  
  // State to manage the visibility of the menu
  const [showMenu, setShowMenu] = useState(false);

  // State to manage the currently selected color for the group
  const [selectedColor, setSelectedColor] = useState('');

  // Reference to the menu button for detecting outside clicks
  const menuRef = useRef();

  const handleChangeColor = (e, color) => {
    e.stopPropagation()
    if(colors[color]) {
      changeColor(group.id, color)
      setShowMenu(false)
    }
  }

  const handleDelete = () => {
    deleteGroup(group.id)
    clearGroupInFlows(group.name)
  }

  // Effect hook to detect clicks outside the menu and close it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }

  },[])

  // Effect hook to set the selected color of the group when it changes
  useEffect(() => {
    setSelectedColor(group.color)
  }, [group])

  return(
    <div key={group.id} className='flex items-center justify-between my-1'> 
      
      {/* NavLink to navigate to the group's page */}
      <NavLink className="[&.active]:bg-gray-100 hover:bg-gray-100 px-2 py-1 rounded-md flex items-center gap-2" to={`group/${group.id}`} >
        <div className={`h-2.5 w-2.5 mx-0.5 rounded-full ${colors[group.color].previewClass}`}></div> 
        {group.name}
      </NavLink>

      {/* Button to toggle the group options menu */}
      <button ref={menuRef} className='p-1 relative group' onClick={() => setShowMenu(true)}>
        <PiDotsThreeVertical className='group-hover:hidden'/>
        <PiDotsThreeVerticalBold className='hidden group-hover:block' />

        {/* Render the menu if showMenu is true */}
        {showMenu && 
        <div className='absolute top-5 right-0 z-10 w-28'>
          <div className='bg-white border shadow-md rounded-md text-xs flex flex-col'>
            <div className='p-3 grid grid-cols-4 gap-1.5'>
              {Object.entries(colors).map(([key, val]) => {
                return (
                <div key={key} className={`h-4 w-4 rounded-full ${val.previewClass} flex items-center justify-center group/color` + (selectedColor === key && ' border')} onClick={(e) => handleChangeColor(e, key)}>
                </div>
              )})}
            </div>
            <hr className='w-full my-0'/>
            <div className='p-3 flex items-center justify-end gap-1 hover:bg-gray-100 active:bg-gray-200 w-full text-right' onClick={handleDelete}><LuTrash2 /> Delete</div>
          </div>
        </div>
        }
      </button>
    </div>
  )
}


export default Group;