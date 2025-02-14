import { useEffect, useRef, useState } from 'react'
import { LuKeyboard } from 'react-icons/lu'

const KeyboardShortcuts = () => {

  // State to keep track of the operating system
  const [os, setOs] = useState("mac");

  // State to toggle visibility of the keyboard shortcuts
  const [showShortcuts, setShowShortcuts] = useState(false)

  // Track the element for handling outside clicks
  const shortcutsRef = useRef()

  // Function to detect the operating system
  const getOS = () => {
    if (navigator.userAgent.includes("Mac")) return "mac";
    return "win";
  };

  useEffect(() => {
    // Set the initial operating system
    setOs(getOS());

    // Handle clicks outside of shortcuts 
    const handleClickOutside = (e) => {
      if(!shortcutsRef.current.contains(e.target)){
        setShowShortcuts(false)
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div ref={shortcutsRef} className='absolute right-4 bottom-4'>
          <div className='flex items-center gap-0.5 bg-white border p-1 rounded-md'>
            <button onClick={() => setShowShortcuts(prev => !prev)} className={'hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-1.5 ' + (showShortcuts && 'bg-gray-100 ')}>
              <LuKeyboard size={16} />
            </button>
          </div>
      </div>
      {/*  Rendering for the keyboard shortcuts  */ }
      {showShortcuts && 
            <div className='absolute right-4 bottom-16 bg-white border rounded-lg p-4'>
              <div className='font-semibold text-sm'>
                Keyboard shortcuts
              </div>
              <div className='text-xs text-gray-500 mt-4 space-y-2'>
              <div className='flex items-center justify-between gap-6'>
                  <div>
                    Copy node
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <div className=' bg-gray-50 border rounded border-b-2 px-1 py-0.5'>
                      {os === 'mac' ? '⌘' : 'ctrl'}
                    </div>
                    <span>
                      +
                    </span>
                    <div className=' bg-gray-50 border rounded border-b-2 px-1 py-0.5'>
                      c
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-6'>
                  <div>
                    Paste node
                  </div>
                  <div className='flex items-center justify-center gap-1'>
                    <div className=' bg-gray-50 border rounded border-b-2 px-1 py-0.5'>
                      {os === 'mac' ? '⌘' : 'ctrl'}
                    </div>
                    <span>
                      +
                    </span>
                    <div className=' bg-gray-50 border rounded border-b-2 px-1 py-0.5'>
                      v
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between gap-6'>
                  <div>
                    Show/hide wireframe selection
                  </div>
                  <div className=' bg-gray-50 border rounded border-b-2 px-1 py-0.5'>
                    Space
                  </div>
                </div>
                <div className='flex items-center justify-between gap-6'>
                  <div>
                    Delete node/edge
                  </div>
                  <div className=' bg-gray-50 border rounded border-b-2 px-1 py-0.5'>
                    Backspace
                  </div>
                </div>
                
              </div>
            </div>
          }
    </>
    
  )
}

export default KeyboardShortcuts;