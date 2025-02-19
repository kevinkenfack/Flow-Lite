import { useEffect, useRef, useState } from 'react'
import {LuCopy, LuGlobe, LuShare2,  LuX } from 'react-icons/lu'

const Share = ({flowId}) => {

  // State to toggle the visibility of the share panel
  const [sharePanel, setSharePanel] = useState(false);

  // Refs to manage DOM elements
  const sharePanelRef = useRef();
  const viewUrlRef = useRef();

  // Function to copy the view URL to clipboard
  const handleCopyUrl = async () => {
    const viewUrl = viewUrlRef.current.innerText

    // Clipboard work if you operate in HTTPS
    try {
      await navigator.clipboard.writeText(viewUrl);
    } catch (err) {
      console.error('Failed to copy: ', err)
    }

  }

  // Close the share panel if the user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if(!sharePanelRef.current.contains(e.target)){
        setSharePanel(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative' ref={sharePanelRef}>
      <button onClick={() => setSharePanel(true)} className='bg-blue-500 text-white rounded px-2.5 h-8 font-medium  text-smb flex items-center gap-1 hover:bg-blue-600 active:bg-blue-700'>
        <LuShare2 />
      </button>
      {sharePanel && 
      <div  className='absolute right-0 top-12 bg-white border rounded-md p-4'>
        <div className='flex justify-between'>
          <div>
            <div className='font-semibold text-sm'>Share project</div>
            <div className='text-xs text-gray-500'>Present your flow with others</div>
          </div>
          <div>
            <button onClick={() => setSharePanel(false)} className='p-2 hover:bg-gray-100 active:bg-gray-200 rounded-md'>
              <LuX size={14}/>
            </button>
          </div>
        </div>
        <hr className='my-2'/>
        <div className='flex gap-2 my-4'>
          <div className='flex items-center justify-center bg-gray-50 w-11 rounded-md'>
            <LuGlobe />
          </div>
          <div className='flex-1'>
            <div className='font-semibold text-xs'>
              Public Access
            </div>
            <div className='text-xs text-gray-500'>
              Anyone with the link can view this project
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <div className='border rounded overflow-hidden flex text-xs'>
            <div className='bg-gray-50 px-2 flex items-center select-all' ref={viewUrlRef}>
              {`http://{your_domain_name}/v/${flowId}`}
            </div>
            <button onClick={handleCopyUrl} className='bg-white flex items-center justify-center gap-1 px-2 w-24 h-7 hover:bg-gray-100 active:bg-gray-200 border-l'>
              <LuCopy />
              <div>
                Copy link
              </div>
            </button>
          </div>
        </div>
      </div>
    } 
    </div>
  )
}

export default Share