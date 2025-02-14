import { NavLink } from 'react-router-dom'

const AddNode = () => {
  return (
    <div>
      <article >
          <header>
            <p className="text-base ">
              Flow Editor
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Adding Node
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
              To add a new node, you can open the toolbox by clicking the Plus button or by pressing the spacebar on your keyboard. The toolbox for adding a new node will be displayed.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/3 border' src='/doc/toolboxopen.png'/>
            </div>
            <p>
            There are three types of nodes you can choose from: Wireframe, Shapes, and Social Icons.
            </p>
            <div className='flex justify-between'>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/toolboxopen.png'/>
            </div>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/toolboxshapes.png'/>
            </div>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/toolboxsocial.png'/>
            </div>
            </div>
            <p>
            To add a new node, simply click on the selected node. The new node will then appear in the flow editor. Additionally, you can also drag and drop a node into the editor.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-1/2 border' src='/doc/newnode.png'/>
            </div>

          </div>
         
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/editorui'} className="text-base font-semibold text-slate-900 hover:underline">
                  Editor UI 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/addedge'} className="text-base font-semibold text-slate-900 hover:underline">
              Adding edge
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default AddNode