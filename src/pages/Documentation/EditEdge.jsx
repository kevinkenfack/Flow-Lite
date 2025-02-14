import React from 'react'
import { NavLink } from 'react-router-dom'

const EditEdge = () => {
  return (
    <div>
      <article>
          <header>
            <p className="text-base ">
              Flow Editor
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Edit edges
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
            Editing an edge is similar to editing a node. Once you have created some connections, you can click on the connection line to enable editing. A new edit window will appear on the left side of the editor.
              </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/edgeedit.png'/>
            </div>
           <p>
              For edge editing, you have several options:
              <ul className='my-2 list-disc ml-5 flex flex-col gap-1'>
                <li>
                Add a label
                </li>
                <li>
                Enable or disable animation
                </li>
                <li>
                Set a start or end marker
                </li>
                <li>
                Set the line style and stroke width
                </li>
                <li>
                Set the color
                </li>

              </ul>
           </p>
           <p>
           You can experiment with all of these options to create more unique styles for your flow.
           </p>
           <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/edgestyles.png'/>
            </div>

            <p>
            To remove an edge, you can click on the trash icon in the edit window or press the backspace key on the keyboard.
            </p>
          </div>
         
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/editnode'} className="text-base font-semibold text-slate-900 hover:underline">
                  Edit node 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/preview'} className="text-base font-semibold text-slate-900 hover:underline">
                Preview flow
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default EditEdge