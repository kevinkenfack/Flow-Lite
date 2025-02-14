import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  // For future development, any issue with your code will be shown in this error
  const production = false
  const error = useRouteError()

  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-50'>
      <div className='text-sm font-medium flex items-center flex-col gap-2'>
        {
          (error?.data || error?.message) && !production ? <div className='bg-slate-100 p-3 rounded font-mono'>Error: {error.data || error.message}</div> :  <div className='text-slate-800'>Page not found</div>
        }
        <Link to="/" className='px-2 h-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded font-semibold text-xs flex items-center gap-1'> Back to home</Link>
      </div>
    </div>
    
  )
}

export default ErrorPage