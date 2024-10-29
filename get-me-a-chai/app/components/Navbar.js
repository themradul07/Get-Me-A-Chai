import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=' bg-black text-white flex justify-between p-4'>
        <div className='flex items-center justify-center'>
        <div className=''>
          <img src="tea.gif" className='w-6' alt="" />
        </div>
        <div className="logo font-bold align-bottom text-lg">Get Me A Chai!!</div>


        </div>
        <div>
          <Link href={"/login"}>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">Login</button>
          </Link>
         
        </div>
    </nav>
  )
}

export default Navbar