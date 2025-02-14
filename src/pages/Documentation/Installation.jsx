import React from 'react'
import { NavLink } from 'react-router-dom'

const Installation = () => {
  return (
    <div>
      <article>
          <header>
            <p className="text-base">
              Getting started
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Installation 
            </h1>
          </header>
          <hr className='my-4' />
          <div className="mt-6">
            <p>
            Follow these steps to set up the development environment for the FlowLite project. This guide will help you install all necessary dependencies.
            </p>
            <h2 className='font-semibold text-xl my-2 text-slate-900'>
            Prerequisites
            </h2>
            <p>
            Before you begin, ensure you have the following installed:
            </p>
            <ul className='my-4 list-disc ml-5 leading-7'><li><strong>Node.js</strong> (version 20.x or higher recommended)</li><li><strong>npm</strong> (Node Package Manager, comes with Node.js)</li></ul>
            <p>
            You can check if you have Node.js and npm installed by running the following commands in your terminal:
            </p>
            <pre className='my-4 '>
              <div className="overflow-y-auto p-4 bg-gray-800 text-white rounded-lg text-sm" dir="ltr">
                <code>
                  node -v <br/>
                  npm -v
                </code>
              </div>
            </pre>
            <p>
            If you see version numbers, you're ready to proceed. If not, please install Node.js and npm first form (https://nodejs.org/en/download/package-manager)
            </p>
          </div>
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-slate-900 flex gap-1'>
            Vite.js 
            </h2>
            <p>
            FlowLite is built using Vite.js (https://vitejs.dev/) a modern and lightning-fast build tool that improves the development experience. 
            Vite.js is chosen for its speed and efficiency, offering features like instant server start, fast hot module replacement (HMR), and optimized builds for production.
            </p>
          </div>
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-slate-900'>
            Setting Up the Project - FlowLite
            </h2>
            <p>
            Once you open FlowLite project you can open console, navigate to specific folder and install all dependencies:
            </p>  
            <pre className='my-6'>
                <div className='p-4 bg-gray-800 text-white rounded-lg text-sm !whitespace-pre'>
                  cd FlowLite/ {"\n"}
                  npm install 
                </div>
            </pre>
            <p>
              Once the installation of dependencies will finish you can run the project:
            </p>
            <pre className='my-4'>
              <div className="p-4 bg-gray-800 text-white rounded-lg text-sm">
                <code>
                  npm run dev
                </code>
              </div>
            </pre>
            <p>
              You shoud see:
            </p>
            <pre className='my-4'>
              <div className="p-4 bg-gray-800 text-white rounded-lg text-sm">
                <code>
                  <span className='text-green-400 font-semibold '>VITE v5.3.4</span>  ready in 234 ms  {"\n"}
                    ➜  Local:   <span className='text-blue-500'>http://localhost:5173/</span>  {"\n"}
                    ➜  Network: use --host to expose {"\n"}
                    ➜  press h + enter to show help {"\n"}
                  </code>
              </div>
            </pre>
            <p className='bg-green-200 p-2 rounded text-sm'>
            The FlowLite project don't require any backend services, so you can immediately open your browser and go to <span className='text-blue-600'>http://localhost:5173/</span> to start using the app.
            </p>
            <p className='mt-2'>
              To build your app for production you can use a build option from Vite.js
            </p>
            <pre className='my-4'>
              <div className="p-4 bg-gray-800 text-white rounded-lg text-sm">
                <code>
                  npm run build
                </code>
              </div>
            </pre>
            <p className='mt-2'>
              Your production ready app will be created in a <code>/dist</code> folder.
            </p>
          </div>
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-slate-900 flex gap-1'>
              Setting Up the Project - FlowLite + Node.js
            </h2>
            <p>
              Version of FlowLite + Node.js is build using two projects. So once you open <code>FlowLiteNodejs/</code> folder you will see two folders:
             </p>
             <pre className='my-4'>
              <div className="p-4 bg-gray-800 text-white rounded-lg text-sm">
                <code>
                FlowLiteNodejs/{"\n"}
                ├── frontend/{"\n"}
                ├── backend/{"\n"}
                  </code>
              </div>
            </pre>
            <h3 className='font-semibold my-2 text-slate-900 flex gap-1'>
              Setting Up backend
            </h3>
            <p>
            First let's run backend. Navigate to backend folder and install all dependencies:
            </p>
            <pre className='my-6'>
               <div className='p-4 bg-gray-800 text-white rounded-lg text-sm !whitespace-pre'>
                 cd backend/ {"\n"}
                 npm install 
               </div>
            </pre>
            <p>
              Next initialise sqlite database
            </p>  
            <pre className='my-6'>
               <div className='p-4 bg-gray-800 text-white rounded-lg text-sm !whitespace-pre'>
                node src/scripts/initializeDatabase.js 
               </div>
            </pre>
            <p>
              Once database is initialised you can run the the project
            </p> 
            
            <pre className='my-4'>
              <div className="p-4 bg-gray-800 text-white rounded-lg text-sm">
                <code>
                  npm run dev
                </code>
              </div>
            </pre>
            <p>
              You shoud see:
            </p>
            <pre className='my-4'>
              <div className="p-4 bg-gray-800 text-white rounded-lg text-sm">
                <code>
flowlite@1.0.0 dev{"\n"}
nodemon src/server.js{"\n"}
{"\n"}
<div className='text-yellow-300'>
[nodemon] 3.1.4{"\n"}
[nodemon] to restart at any time, enter `rs`{"\n"}
[nodemon] watching path(s): *.*{"\n"}
[nodemon] watching extensions: js,mjs,cjs,json{"\n"}
</div>
<span className='text-green-400'>[nodemon] starting `node src/server.js`{"\n"}</span>
Server running on http://localhost:5000{"\n"}
                  </code>
              </div>
            </pre>
            <h3 className='font-semibold my-2 text-slate-900 flex gap-1'>
              Setting Up frontend
            </h3>
            <p>
            Navigate to frontend folder and install all dependencies:
            </p>
            <pre className='my-6'>
               <div className='p-4 bg-gray-800 text-white rounded-lg text-sm !whitespace-pre'>
                 cd frontend/ {"\n"}
                 npm install 
               </div>
            </pre>
            <p>
              Once the installation of dependencies will finish you can run the project:
            </p>
            <pre className='my-4'>
              <div className="p-4 bg-gray-800 text-white rounded-lg text-sm">
                <code>
                  npm run dev
                </code>
              </div>
            </pre>
            <p className='bg-orange-200 p-2 rounded text-sm'>
              Please be aware that the frontend project interacts with a Node.js backend, so it's essential to start the backend project before running the frontend.
            </p>

            <pre className='my-4'>
              <div className="p-4 bg-gray-800 text-white rounded-lg text-sm">
              <code>
                  <span className='text-green-400 font-semibold '>VITE v5.3.4</span>  ready in 234 ms  {"\n"}
                    ➜  Local:   <span className='text-blue-500'>http://localhost:5173/</span>  {"\n"}
                    ➜  Network: use --host to expose {"\n"}
                    ➜  press h + enter to show help {"\n"}
                  </code>
              </div>
            </pre>
            <p>
            At this point, everything should be set up, so you can open your browser, go to  <span className='text-blue-500'>http://localhost:5173/</span> and start using the app.
            </p>
          </div>
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/package'} className="text-base font-semibold text-slate-900 hover:underline">
                  Package 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/database'} className="text-base font-semibold text-slate-900 hover:underline">
                Database
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default Installation