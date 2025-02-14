import React from 'react'
import { NavLink } from 'react-router-dom'

const EditNode = () => {
  return (
    <div>
      <article>
          <header>
            <p className="text-base ">
              Flow Editor
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Edit  nodes
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
            Once you have added new nodes or connected a few of them, you can edit them. To edit a node, simply click on the node. A new edit node window will appear on the left side of the editor.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/editnode.png'/>
            </div>
            <p>
              Regardless of the node type (Wireframe, Shape, or Social), there are two options in the edit node window: changing the label of the node or changing the color of the node.
            </p>
            <p>
            In Wireframe and Social Icon nodes, the label is placed on top of the node. In Shape nodes, the label is placed in the center of the shape.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/labels.png'/>
            </div>
            <p>
            The color option allows you to change both the border and the background color of the node.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/colors.png'/>
            </div>
            <p>
            To remove node, you can click on the trash icon in the edit window or press the backspace key on the keyboard.
            </p>
            
          </div>
         
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/addtext'} className="text-base font-semibold text-slate-900 hover:underline">
                  Add text 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/editedge'} className="text-base font-semibold text-slate-900 hover:underline">
                Edit edge
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default EditNode