import React from 'react'
import { NavLink } from 'react-router-dom'

const AddText = () => {
  return (
    <div>
      <article>
          <header>
            <p className="text-base ">
              Flow Editor
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Adding Text
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
            The next type of node you can add is the Text node, also known as the Annotation node. 
            </p>
            <p>
            You can add it by clicking the "T" button on the left side of the editor. A new text node with "Annotation" text, will appear in the editor.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/annotation.png'/>
            </div>
            <p>
            To edit the text of the annotation node, simply click on the text, and a new editing window will appear on the left side of your screen. In this window, you will find an input form where you can modify the text. Your changes will automatically update the node in the editor.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/newannotation.png'/>
            </div>
            <p>
            If you add a large amount of text, for example, to make a description, you can adjust the size of the node by dragging the resize button on the node. There are yellow dots in all four corners that you can drag and drop to change the size of the node.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/largeannotation.png'/>
            </div>
            <p>
            To remove an annotation, you can click on the trash icon in the edit window or press the backspace key on the keyboard.
            </p>

          </div>
         
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/addedge'} className="text-base font-semibold text-slate-900 hover:underline">
                  Adding edge 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/editnode'} className="text-base font-semibold text-slate-900 hover:underline">
                Edit node
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default AddText