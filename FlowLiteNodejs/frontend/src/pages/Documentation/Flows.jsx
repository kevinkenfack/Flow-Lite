import React from 'react'
import { NavLink } from 'react-router-dom'

const Flows = () => {
  return (
    <div>
      <article>
          <header>
            <p className="text-base ">
              Workspace
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Flows
            </h1>
          </header>

          <hr className='my-4' />
          <div className="mt-6">
            <p>
              When you open the FlowLite app, you'll be greeted with the main workspace page.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/workspace.png'/>
            </div>
            <p>
              The left-side menu includes options for Flows, Groups, and Documentation.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/5 border' src='/doc/flowmenu.png'/>
            </div>
            <p>
              On the right side of the Workspace you'll see your recently edited flows, along with a list of all your flow projects for easy access. 
            </p>
            <p>
            To <strong>add a new flow</strong> project, simply tap the Create New card from the main list.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/addflow.png'/>
            </div>
            <p>
            You will be redirected to the editor page with the newly created flow. Please refer to the Editor section of the documentation to learn more about the editor user interface -  
            <NavLink to={'/workspace/documentation/editorui'} className='text-blue-600 font-semibold'> Flow Editor</NavLink>
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/emptyeditor.png'/>
            </div>
          </div>
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/database'} className="text-base font-semibold text-slate-900 hover:underline">
                  Database
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/groups'} className="text-base font-semibold text-slate-900 hover:underline">
                Groups
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default Flows