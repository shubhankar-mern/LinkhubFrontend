import React from 'react'
import Navbar from '../Components/Navbar';
import Footers from '../Components/Footer';
import redafro from '../images/redafro.jpg';
import blueafrowomen from '../images/blueafrowomen.jpg';
import greenblond from '../images/greenblond.jpg';
import redgroup from '../images/redgroup.jpg';

const Homepage = () => {
  return (
    <div className='w-full h-fit relative bg-red-500 flex flex-col'>
        <div className='w-full mx-auto sticky top-10 z-50'>
        <Navbar/>
        </div>
        <div className='flex md:flex-row justify-between mt-20 md:mx-20 mx-0 flex-col '>
        <div className='h-auto md:w-5/12  w-full flex flex-wrap text-6xl font-semibold text-white'>
        Everything you are, in one simple link.
        <p className='text-base'>Join 40M+ people using Linktree for their link in bio. One Link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        </div>
        <div className='my-auto mb-6'><img src={redafro} alt='red-afro-lady' className='rounded-lg' /></div>
        </div>
  <div className='flex flex-row flex-wrap justify-center mt-30'>    
     
     <div className='bg-blue-500 w-full h-auto z-30'>
     <div className='flex md:flex-row-reverse justify-between mt-20 md:mx-20 mx-0 flex-col'>
        <div className='h-auto md:w-5/12 w-full flex flex-wrap text-6xl font-semibold'>
        You never have to change the link in your bio again
        <p className='text-base'>Linktree was the first ‘link in bio’ platform made to solve this problem. Linktree has since become so much more. Allowing businesses or creators to get more out of their social media, grow their following, easily take payments and take back control of how your content is discovered.</p>
        </div>
        <div className='my-auto mb-6'><img src={blueafrowomen} alt='red-afro-lady' className='rounded-lg ' /></div>
        </div>
     </div>


     <div className='bg-green-500 w-full h-auto z-30'>
      <div className='flex md:flex-row justify-between mt-20 md:mx-20 mx-0 flex-col'>
        <div className='h-auto md:w-5/12 w-full flex flex-wrap text-6xl font-semibold'>
        Grow your followers across all your social platforms
        <p className='text-base'>Give your followers easy access to all of your content in one simple link. Now everything you do is just one tap away!Sell your products, take payments, and even include “support me” links to let your audience support, tip or donate.</p>
        </div>
        <div className='my-auto mb-6'><img src={greenblond} alt='red-afro-lady' className='rounded-lg ' /></div>
        </div>
     </div>


     <div className='bg-red-500 w-full h-auto z-30'>
     <div className='flex md:flex-row-reverse justify-between mt-20 md:mx-20 mx-0 flex-col'>
        <div className='h-auto md:w-5/12 w-full flex flex-wrap text-6xl font-semibold'>
        Grow with in-depth user analytics
        <p className='text-base'>Use powerful analytics to know what your followers are engaging with, and use the insights to grow your followers and business.</p>
        </div>
        <div className='my-auto mb-6'><img src={redgroup} alt='red-afro-lady' className='rounded-lg ' /></div>
        </div>
     </div>

     {/* <div className='bg-orange-500 w-full h-72 z-30'>
      Carousel goes here
     </div>
     <div className='bg-red-500 w-full h-72 z-30'>
      fAQ GOES HERE
     </div> */}
     </div>

     {/* FOOTER */}
     <Footers/>
    </div>
  )
}

export default Homepage;