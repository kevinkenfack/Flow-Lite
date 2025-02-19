import React from 'react'
import { NavLink } from 'react-router-dom'

const Database = () => {
  return (
    <div>
      <article >
          <header>
            <p className="text-base ">
              Getting started
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Database 
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
            The FlowLite app uses local storage as its database, making it easy to use in any environment without requiring a server.
            </p>
            <br/>
            <p className='text-xl'>
            This <strong>database-agnostic</strong> approach allows easy connections to your own database or external APIs. FlowLite has only two tables for storing information: <strong>Flows</strong> and <strong>Groups</strong>.
            </p>
            <br/>
            <p>
            All the logic for managing the existing state of a flow (nodes and edges) is handled by a custom hook called <strong>useFlow</strong>. This hook includes a function named <strong>updateStorage</strong>, which takes the current state of the flow and, with a slight debounce, saves it to local storage. This separation makes it easy to implement your own API for storing the data.
            </p>
            <p>
            In addition to useFlow, there are also general hooks: useFlows for adding, deleting, and updating flow, and useGroups for managing groups.
            </p>
            <br/>
            <p>
            At the top of the custom hooks managing the state for flows and groups, you will find a table structure outlining the column names and their data types.
            
            If you need any assistance with creating your own database API or require detailed information, please contact us through our support channel. <NavLink to={'/workspace/documentation/support'} className='text-blue-600 font-semibold'> Support</NavLink>
            </p>
          </div>
         
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/installation'} className="text-base font-semibold text-slate-900 hover:underline">
                Installation 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/flows'} className="text-base font-semibold text-slate-900 hover:underline">
                Flows
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default Database