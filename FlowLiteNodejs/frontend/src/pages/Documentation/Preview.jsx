import React from 'react'
import { NavLink } from 'react-router-dom'

const Preview = () => {
  return (
    <div>
       <article>
          <header>
            <p className="text-base ">
              Flow Editor
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Preview flow
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
            If you want to preview your flow without editing options, you can use the Preview button in the top-right corner of Editor.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/5 border' src='/doc/preview.png'/>
            </div>
            <p>
            It will open a new window displaying your flow.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/previewflow.png'/>
            </div>
           
          </div>
         
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/editedge'} className="text-base font-semibold text-slate-900 hover:underline">
                  Edit edge 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/support'} className="text-base font-semibold text-slate-900 hover:underline">
              Support
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default Preview