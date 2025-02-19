import React from 'react'
import { NavLink } from 'react-router-dom'

const Support = () => {
  return (
    <div>
        <article>
          <header>
            <p className="text-base ">
              uiroom
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Support
            </h1>
          </header>
          <hr className='my-4' />
          <div className='m-6'>

          <p>Welcome to the support section of documentation. If you encounter any issues or need help with app, please follow the guidelines below:</p>
          <p class="font-semibold my-2">If you need assistance with the script, please choose one of the following methods to reach out to me:</p>
          <p><strong>Support page on Uiroom</strong></p>
          <p><a class="text-blue-600 font-semibold" target="_blank" href="https://uiroom.pro/support">Uiroom Support Page</a></p>
          <br />
          <p>
          <strong>Email Support</strong>
          </p>
          <p>
          For detailed inquiries, you can email me directly at <strong>hello@uiroom.pro</strong>
          </p>
          <div>When emailing us, please provide the following details to help us assist you more efficiently:<ul class="list-disc ml-4 my-2 leading-7"><li>A detailed description of the issue</li><li>The version of the script you are using</li><li>Any error messages</li><li>Steps to reproduce the problem</li><li>Screenshots or other relevant files</li></ul></div>
          </div>
        </article>
        <dl className="flex pt-6 mt-6 border-t border-slate-200">
          <div className="mr-auto text-left">
              <dt className="text-sm font-normal tracking-tight text-slate-600">
                Previous
              </dt>
              <dd className="mt-1">
                <NavLink to={'/workspace/documentation/preview'} className="text-base font-semibold text-slate-900 hover:underline">
                  Preview flow 
                </NavLink>
              </dd>
          </div>
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>
            <dd className="mt-1">
              <NavLink to={'/workspace/documentation/changelog'} className="text-base font-semibold text-slate-900 hover:underline">
                ChangeLog
              </NavLink>
            </dd>
          </div>
        </dl>
    </div>
  )
}

export default Support