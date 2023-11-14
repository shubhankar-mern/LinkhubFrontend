import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/linkhub-brand.png';

const Footers = () => {
  return (
    <>
    <footer class="bg-black">
  <div class="max-w-[85rem] py-4 px-4 sm:px-6 lg:px-8 lg:pt-1 mx-auto">



  
{/* <!-- Grid2 --> */}
  <div class="bg-black lg:mt-5 mt-1 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center border">
    <div className=" flex flex-row border border-white">
    <img className='text-2xl mx-5 w-40 h-14 mt-6 mb-2 bg-white' alt='img-company' src={logo} />
    
      <div class="flex justify-start flex-col border w-80 ">
        <p class="md:text-2xl text-sm text-white font-bold mb-4 mx-2 md:my-1 my-auto">Explore and share your favorite links with our platform. Grow your followers across all your social platforms.</p>
        {/* <Link to="/hire"><button class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow w-28">
  Post a job
</button></Link> */}

      </div>
      </div>
      {/* <!-- End Col --> */}

      {/* <!-- Social Brands --> */}
      {/* <div class="flex flex-col ">
        <ul className='flex flex-col  text-sm gap-x-2'>
        <li className='font-bold text-lg text-white'>Jobs</li>
        <li className='font-normal text-lg text-red-600'>Remote Jobs</li>
        <li className='font-normal text-lg text-red-600'>Design Internships</li>
        <li className='font-normal text-lg text-red-600'>Design Gigs</li>
        </ul>
      </div> */}
      {/* <!-- End Social Brands --> */}
    </div>
    {/* <!-- Grid --> */}
    

    <div class="bg-black mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center border">
      <div class="flex justify-start flex-col border mx-auto md:mx-0 text-center md:text-left">
        <p class="text-sm text-gray-400">© 2023 Linkhub. All rights reserved.</p>
        <p class="text-xs text-gray-400">By using this site, you agree to our terms of service and privacy policy.</p>
      </div>
      {/* <!-- End Col --> */}

      {/* <!-- Social Brands --> */}
      <div class="flex flex-col mx-auto md:mx-0">
        <div className='flex flex-row'>
        <ul className='flex flex-row text-red-700 text-sm gap-x-2'>
        <Link to="/terms"><li className='font-bold'>Terms</li></Link>
        <Link to="/privacy"><li className='font-bold'>Privacy</li></Link>
        <Link to ="/contactus"><li className='font-bold mx-0'>Get in touch</li></Link>
        </ul>
      </div>
      
      </div>
      {/* <!-- End Social Brands --> */}
    </div>
  </div>
</footer>
    </>
  )
}

export default Footers;