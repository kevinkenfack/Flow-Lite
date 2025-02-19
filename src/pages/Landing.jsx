import { LuArrowRight, LuDatabase, LuGithub, LuBookOpen, LuCheck } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Content */}
      <div className='relative flex min-h-screen flex-col items-center justify-center gap-8 mx-auto max-w-xl px-4 py-8'>
        {/* Badge */}
        <div className='px-3 py-1.5 border rounded-full border-blue-200 flex items-center justify-center text-xs gap-1.5 bg-blue-50/50 backdrop-blur-sm shadow-sm'>
          <LuDatabase className='text-blue-600'/> 
          <span className='text-blue-900'>LocalStorage</span> 
          <strong className='text-blue-700'>database</strong>
        </div>

        {/* Title */}
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
            FlowLite
            <span className='block text-lg sm:text-xl mt-2 font-medium text-gray-600'>
              User Flow Builder
            </span>
          </h1>
          
          <p className='text-center text-gray-600 text-sm sm:text-base max-w-md mx-auto'>
            Design and create interactive user flows.
            Visualize your user journeys across websites and social media using various wireframes.
          </p>
        </div>

        {/* Features List */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 w-full max-w-md'>
          {[
            'Drag & Drop Interface',
            'Custom Wireframes',
            'Social Media Integration',
            'Real-time Preview',
            'Export to PNG',
            'Responsive Design'
          ].map((feature, index) => (
            <div key={index} className='flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-100 shadow-sm'>
              <LuCheck className="text-blue-600 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
          <NavLink 
            to="/workspace/all" 
            className='rounded-lg px-6 py-2.5 font-medium text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 transition-all shadow-lg shadow-gray-200'
          >
            Start Building <LuArrowRight />
          </NavLink>

          <div className='flex gap-3 sm:gap-2'>
            <NavLink 
              to="/workspace/documentation/introduction" 
              className='flex-1 sm:flex-none rounded-lg px-4 py-2.5 font-medium text-sm flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm'
            >
              <LuBookOpen className="w-4 h-4" />
              Docs
            </NavLink>

            <a 
              href="https://github.com/kevinkenfack/Flow-Lite" 
              target="_blank" 
              rel="noopener noreferrer"
              className='flex-1 sm:flex-none rounded-lg px-4 py-2.5 font-medium text-sm flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm'
            >
              <LuGithub className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className='text-sm text-gray-500 pt-4 border-t border-gray-100 w-full text-center'>
          Made with ❤️ by Kevin Kenfack
        </div>
      </div>
    </div>
  )
}

export default Landing;