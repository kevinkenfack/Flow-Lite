import { useEffect, useRef, useState } from 'react'
import { LuPresentation } from 'react-icons/lu'
import { Link } from 'react-router-dom';
import { CgMenuLeft } from 'react-icons/cg';
import Export from './Export';
import Share from './Share';

const Nav = ({flow, changeName}) => {

  // State to manage the name of the flow and the width of the input
  const [name, setName] = useState('');
  const [inputWidth, setInputWidth] = useState('');

  // Ref to the input field directly to change it's width
  const inputNameRef = useRef()

  const handleChangeName = (e) => {
    setName(e.target.value)
    changeName(e.target.value)
  }

  useEffect(() => {
    setName(flow.name)
  }, [])


  // Update the input field width dynamically
  useEffect(() => {
    setInputWidth(inputNameRef.current.scrollWidth)
  }, [name])

  return (
      <div className='absolute w-full top-3 flex justify-between items-start px-4'>
        <div className='flex items-center gap-1 border bg-white p-1 rounded-md z-10'>
          <Link className='px-2 py-2 font-medium text-sm flex items-center gap-2 hover:bg-gray-100 active:bg-gray-200 rounded' to={'/workspace/all'}>
            <CgMenuLeft size={16}/>
            <span className='font-bold'>FlowLite</span>
          </Link>
          <div>
            |
          </div>
          <div className='font-medium text-sm px-2  rounded flex items-center gap-2 hover:bg-gray-100'>
            <input ref={inputNameRef} type='text' placeholder="Flow title" value={name} onChange={handleChangeName} className='py-1.5 pr-3 bg-transparent outline-none text-sm text-gray-700 w-auto' style={{width: inputWidth + 'px'}}/>
          </div>
        </div>
        <div className='flex gap-1 border bg-white p-1 rounded-md z-10'>
          <Link to={`/v/${flow.id}`} className='rounded px-2 py-1.5 font-medium text-smb flex items-center gap-1 hover:bg-gray-100 active:bg-gray-200'>
            <LuPresentation /> Preview
          </Link>
          <Export flowName={flow.name}/>
          <Share flowId={flow.id}/>
        </div>
      </div>
  )
}

export default Nav