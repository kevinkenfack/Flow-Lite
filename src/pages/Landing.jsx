import { LuArrowRight, LuDatabase } from 'react-icons/lu'
import {NavLink} from 'react-router-dom'

const Landing = () => {
  return (
    <div className="relative h-screen w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className='flex h-screen flex-col items-center justify-center gap-4 mx-auto  max-w-xl'>
          <div className='px-2 py-1 border rounded-full border-gray-300 flex items-center justify-center text-xs gap-1 bg-white'>
            <LuDatabase className='text-blue-600'/> LocalStorage <strong>database</strong>
          </div>
          <div className='text-4xl font-bold bg-white'>
              FlowLite - user flow builder
          </div>
          <div className='text-center'>
            Design and create interactive user flows.
            Visualize your user journeys across websites and social media using a various wireframes, customizable shapes and social platform icons.
          </div>
          <div>
            <NavLink to={'/'} className='rounded px-3 py-1.5 font-medium text-smb flex items-center gap-1 bg-gray-800 text-white active:bg-gray-700'>
              Enter <LuArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;