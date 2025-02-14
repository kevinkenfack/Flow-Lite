import { NavLink } from 'react-router-dom'

const AddEdge = () => {
  return (
    <div>
      <article >
          <header>
            <p className="text-base ">
              Flow Editor
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Adding Edge
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
            When you have more than one node added to the editor, you can create an edge by connecting two or more nodes.  
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/twonodes.png'/>
            </div>
            <p>
            To add an edge and connect two nodes, hover your mouse over the black dot on right side of the node. Your cursor will change to indicate that you can start creating a connection. When you click and hold, the new connection will appear and follow your mouse movement.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/edge.png'/>
            </div>
            <p>
            When you drop the edge onto the black dot of another node, the edge/connection will be created. 
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/connection.png'/>
            </div>
            <p>
            In this way, you can add multiple nodes and connect them, creating a simple flow.
            </p>
            <div className='p-4 my-2'>
              <img className='rounded-md shadow-xl w-full border' src='/doc/baseflow.png'/>
            </div>
            <p>
            For editing an edge or node, please refer to the next sections in the documentation.
            </p>

          </div>
         
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/addnode'} className="text-base font-semibold text-slate-900 hover:underline">
                  Adding node 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/addtext'} className="text-base font-semibold text-slate-900 hover:underline">
              Adding text
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default AddEdge