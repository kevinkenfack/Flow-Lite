import React from 'react'
import { NavLink } from 'react-router-dom'

const Groups = () => {
  return (
    <div>
      <article>
          <header>
            <p className="text-base ">
              Workspace
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Groups
            </h1>
          </header>

          <hr className='my-4' />
          <div className="mt-6">
            <p>
              In the menu on the left side, you'll find the Groups section. Groups are used to easily categorize your flows, helping you stay organized.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/4 border' src='/doc/groups.png'/>
            </div>
            <p>
            You can easily add a new group by clicking Add New Group. A form will appear, allowing you to enter the group's name.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/4 border' src='/doc/groupform.png'/>
            </div>
            <p>
            Each group has a color attribute that you can change by clicking the dots button to the right of the group name.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/4 border' src='/doc/groupedit.png'/>
            </div>
            <p>
            To add a flow to a group, open the action menu on the right side of the flow and select Group New.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-2/3 border' src='/doc/selectgroup.png'/>
            </div>
            <p>
              To delete a group, simply select the Delete from the group menu. Any flows associated with the deleted group will have their group assignment cleared.
            </p>
          </div>
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/flows'} className="text-base font-semibold text-slate-900 hover:underline">
                  Flows
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/editorui'} className="text-base font-semibold text-slate-900 hover:underline">
                Editor UI
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default Groups