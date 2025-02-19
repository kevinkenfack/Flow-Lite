import { PiDotsNineBold, PiMagnet } from 'react-icons/pi'
import { useAppStore} from './../../store/app'
import { useShallow } from 'zustand/shallow'

const GridControls = () => {

  // Get global settings
  // setProperty is a method to update specific properties in the store
  const {showGrid, snapToGrid, setProperty} = useAppStore(useShallow(state => ({showGrid: state.showGrid, snapToGrid: state.snapToGrid, setProperty: state.setProperty})))

  const handleGridShow = () => {
    setProperty('showGrid', !showGrid)
  }

  const handleSnapToGrid = () => {
    setProperty('snapToGrid', !snapToGrid)
  }

  return (
    <div className='absolute left-4 bottom-4 bg-white border p-1 rounded-md'>
        <div className='flex items-center gap-0.5'>
          <button onClick={handleGridShow} className={'hover:bg-gray-100 active:bg-gray-200 rounded px-2 py-1.5 ' + (showGrid && 'bg-gray-100 ')}><PiDotsNineBold size={18} /></button>
          <button onClick={handleSnapToGrid} className={' hover:bg-gray-100 active:bg-gray-200 px-2 py-1.5 rounded ' + (snapToGrid && 'bg-gray-100')}><PiMagnet size={18}/></button>
        </div>
    </div>
  )
}

export default GridControls