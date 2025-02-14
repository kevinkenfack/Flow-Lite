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
            <p className='text-xl'>
            FlowLite offers two approaches for database integration
            </p>
            <ul className='my-4 list-disc ml-5 leading-7'>
              <li><strong>Local Storage </strong> -  The demo version of FlowLite use the browser's local storage as a database</li>
              <li><strong>Node.js with SQLite</strong> - This version use a Node.js backend with an SQLite database for data storage and management. It offers a more scalable and flexible solution, enabling API-based interactions</li></ul>
            <p>
            All the logic for managing the existing state of a flow (nodes and edges) and groups is handled by custom hooks called <strong>useFlow</strong> and <strong>useGroups</strong>.
            These hooks include separate services files responsible for connecting with the API.
             This separation makes it easy to implement your own API for storing the data. 
             For example to get all flows in the service file there is a function apiGetFlows with standard try/catch block and api call inside:<br/> 
             <span className='font-mono bg-gray-100 p-0.5 px-2 text-xs rounded-lg'>await api.get('/flows');</span>
              Where <strong>api</strong> method is an instance of axios. So at the end all you need to do is to change the url to your api. Full working example of this you can find in FlowLite + Node.js where Node.js server is used as an api backend.
            </p>
            <br/>
            <p>
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