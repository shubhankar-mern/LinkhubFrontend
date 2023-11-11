import React from 'react'
import logo from '../images/linkhub-brand.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    // <div className='h-24 w-10/12 bg-white rounded-lg mx-auto sticky top-10 z-50 '>
      <div className=" shadow-lg h-20 md:w-10/12 bg-white rounded-2xl mx-auto sticky top-10 z-50 px-8 w-full">
  <header className="container mx-auto flex justify-between items-center h-20">
    <div className="flex items-center space-x-4 text-gray-600 md:text-base text-xs">
      <p className="text-lg "> <img className='text-2xl mx-1 w-36 h-14  bg-white' alt='img-company' src={logo} /></p>
      
      <p>Discover</p>
      <p>About us</p>
    </div>
    <div className="flex items-center space-x-4">
      <button className="bg-gray-200 text-gray-600 hover:bg-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out md:text-base text-xs">
      <Link to="/login">Login</Link>
      </button>
      <button className="bg-slate-600 text-white hover:bg-slate-900 rounded-full px-6 py-2 transition duration-300 ease-in-out md:text-base text-xs">
      <Link to="/signup">Sign Up</Link>
      </button>
    </div>
  </header>
</div>
    
  )
}

export default Navbar