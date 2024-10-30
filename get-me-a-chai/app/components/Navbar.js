"use client"

import React, { useState } from 'react'
import Link from 'next/link'

import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const { data: session } = useSession()
  const [Showdropdown, setShowdropdown] = useState(false)

  return (
    <nav className=' bg-black text-white flex justify-between p-4'>
      <Link href={"/"} className=' bg-black text-white flex justify-between items-center'>
        <div className='flex items-center justify-center'>
          <div className=''>
            <img src="tea.gif" className='w-6' alt="" />
          </div>
          <div className="logo font-bold align-bottom text-lg">Get Me A Chai!!</div>


        </div>
      </Link>
      <div className='relative'>
        {session && <>
          <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs  px-5 py-2.5 text-center " type="button" onBlur={()=>{setTimeout(() => {setShowdropdown(false)
            
          }, 100);}} onClick={() => {
            setShowdropdown(!Showdropdown)
          }
          }>
            <div className='flex justify-center items-center'>

              <div>
                Welcome {session.user.name}
              </div>
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </div>
          </button>


          <div id="dropdownInformation" className={` z-10 absolute mt-2 ${Showdropdown ? " " : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 `} >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{session.user.name}</div>
              <div className="font-medium truncate">{session.user.email}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
              <li>
                <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Homepage</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
              </li>
            </ul>
            <div className="py-2">
              <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={() => { signOut() }}>Sign out</Link>
            </div>
          </div>
        </>
        }
        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" >Login</button>
        </Link>}

      </div>
    </nav>
  )
}

export default Navbar