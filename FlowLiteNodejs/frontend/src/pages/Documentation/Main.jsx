import React from 'react'
import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom'

const Main = () => {
  return (
    <div className='relative flex'>
      <div className="fixed top-0 h-screen px-4 left-0 hidden lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none ">
        <nav className="sticky top-0 w-52  text-sm">
          <ul role="list" className="h-[calc(100vh-6rem)] overflow-y-auto pl-0.5 space-y-4">
            <li>
              <h3 className="font-semibold tracking-tight">
                Getting started
              </h3>
              <ul role="list" className="pl-2 mt-3 space-y-1">
                <li>
                  <NavLink to={'introduction'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                    Introduction
                  </NavLink>
                </li>
                <li>
                <NavLink to={'package'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                    Package
                  </NavLink>
                </li>
                <li>
                <NavLink to={'installation'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                    Installation
                  </NavLink>
                </li>
                <li>
                <NavLink to={'database'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                    Database
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold tracking-tight text-gray-900">
                Workspace 
              </h3>

              <ul role="list" className="pl-3 mt-3 space-y-1">
                <li>
                  <NavLink to={'flows'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Flows
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'groups'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Groups
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold tracking-tight text-gray-900">
                Flow Editor 
              </h3>

              <ul role="list" className="pl-3 mt-3 space-y-1">
                <li>
                  <NavLink to={'editorui'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Editor
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'addnode'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Adding node
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'addedge'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Adding edge
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'addtext'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Adding Text
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'editnode'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Edit nodes
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'editedge'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Edit edges
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'preview'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Preview flow
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="font-semibold tracking-tight text-gray-900">
              uiroom
              </h3>

              <ul role="list" className="pl-3 mt-3 space-y-2">
              <li>
                  <NavLink to={'support'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      Support
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'changelog'} className='[&.active]:bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-50 block'>
                      ChangeLog
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-auto max-w-2xl min-w-0 px-4 lg:max-w-none lg:pr-0 lg:pl-8 ">
        <ScrollRestoration />
        <Outlet />
      </div>
    </div>
  )
}

export default Main