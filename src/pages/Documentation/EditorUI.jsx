import React from 'react'
import { NavLink } from 'react-router-dom'

const EditorUI = () => {
  return (
    <div>
      <article >
          <header>
            <p className="text-base ">
              Flow Editor
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Editor UI 
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
              Once you create a new flow or edit an existing one, you will enter the Flow Editor. It is composed of several sections, so let's go through each one.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/emptyeditor.png'/>
            </div>
            <p>
            In the top-left corner, you will find the FlowLite button, which takes you to the workspace page where you can see a list of your flows. Next to it is the current title of your flow, which is editable. You can click on it to update the title.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/3 border' src='/doc/toolbox.png'/>
            </div>
            <p>
            Just below the title, you will find the main toolbox for adding nodes, including the plus button and the "T" button. More information about adding nodes can be found in the next section of this documentation.
            </p>
            <br/>
            <p>
            Next, in the bottom-left corner, you will find two buttons to control the canvas. The first is the dots button, which enables and disables the grid. The second is the magnet button, which allows nodes to snap to the grid when moved.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/4 border' src='/doc/magnet.png'/>
            </div>
            <p>
            At the bottom center, you will find the view controls. You can zoom in, zoom out, or use the middle button to fit your flow to the current view.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/4 border' src='/doc/viewcontrols.png'/>
            </div>
            <p>
            In the top-right corner, you will find the Preview, PNG, and Share buttons: </p>
            <ul className='my-4 list-disc ml-5 leading-7'>
              <li>
              The Preview button redirects you to a dedicated preview page where you can view your flow without any editing options.
              </li>
              <li>
              The PNG button generates an image of your flow and automatically triggers a download of the file.
              </li>
              <li>
              The Share button provides a link that allows you to easily share your flow with others.
              </li>
            </ul>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/3 border' src='/doc/preview.png'/>
            </div>

          </div>
         
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/groups'} className="text-base font-semibold text-slate-900 hover:underline">
                  Groups 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/addnode'} className="text-base font-semibold text-slate-900 hover:underline">
                Adding node
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default EditorUI