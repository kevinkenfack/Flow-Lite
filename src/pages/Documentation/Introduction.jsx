import React from 'react'
import { NavLink } from 'react-router-dom'

const Introduction = () => {
  return (
    <div>
      <div className='rounded-md shadow-md border mb-6 relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold drop-shadow-md z-10'>
          FlowLite
        </div>
        <img className='rounded-md w-full ' src='/doc/introScreen.png'/>
      </div>
      <article>
          <header>
            <p className="text-base ">
              Getting started
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Introduction 
            </h1>
          </header>
          <p className="mt-2 text-xl">
          Welcome to the documentation for FlowLite, a web application designed for creating and editing interactive user flows. This guide will help you understand the app's basic usage and walk you through setting up the development environment.
          </p>
          <hr className='my-4' />
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-gray-900'>
            Project Overview  
            </h2>
            <p>
            The FlowLite is a web-based application build with React that allows users to create and customize user flows.
            </p>
          </div>
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-gray-900'>
            Technology Stack 
            </h2>
            <ul className='list-disc ml-5 leading-7'>
              <li><strong className=''>Build</strong>: Vite is used to setup development envirement and build process.</li>
              <li><strong className=''>Frontend</strong>: React and ReactRouter is used to build interactive user interface.</li>
              <li><strong className=''>State Management</strong>: Custom hooks and Zustand are using for state management.</li>
              <li><strong className=''>Database</strong>: LocalStorage is used to store data in a user browser.</li>
              <li><strong className=''>Styling</strong>: TailwindCSS are employed to manage styles in application.</li></ul>
          </div>
          <div className="mt-6">
            <h2 className='font-semibold text-xl my-2 text-gray-900'>
              Target Audience
            </h2>
            <p>
            This documentation is intended for developers with a basic understanding web development technologies.
            </p>
          </div>
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/package'} className="text-base font-semibold text-slate-900 hover:underline">
                Package
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default Introduction