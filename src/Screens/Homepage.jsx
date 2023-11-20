import React,{useEffect,useState} from 'react'
import Navbar from '../Components/Navbar';
import Footers from '../Components/Footer';
import redafro from '../images/redafro.jpg';
import blueafrowomen from '../images/blueafrowomen.jpg';
import greenblond from '../images/greenblond.jpg';
import redgroup from '../images/redgroup.jpg';
import FaqCards from '../Components/FaqCards';
import faq from '../Staticdata/Faq';
import Imagepic from '../Staticdata/Image';
import Introcard from '../Components/Introcard';
const Homepage = () => {
   const personas=['Marketers','Sportspersons','Influencers','Artists','Students','Developers'];
   const [currentPersona, setCurrentPersona] = useState(personas[0]);
   

   useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentPersona((prevPersona) => {
          const currentIndex = personas.indexOf(prevPersona);
          const nextIndex = (currentIndex + 1) % personas.length;
          return personas[nextIndex];
        });
      }, 4000);
  
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  return (
    <div className='w-full h-fit relative bg-red-500 flex flex-col'>
        <div className='w-full mx-auto sticky top-10 z-50'>
        <Navbar/>
        </div>
        <div className='flex lg:flex-row justify-between mt-20 md:mx-20 mx-0 flex-col '>
        <div className='h-auto lg:w-5/12  w-full flex flex-wrap text-6xl font-semibold text-white '>
        Everything you are, in one simple link.
        <p className='text-base my-5'>Join 40M+ people using Linktree for their link in bio. One Link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        </div>
        <div className='my-auto mb-6 '><img src={redafro} alt='red-afro-lady' className='rounded-lg mx-1 shake' /></div>
        </div>
  <div className='flex flex-row flex-wrap justify-center mt-30'>    
     
     <div className='bg-blue-500 w-full h-auto z-30'>
     <div className='flex xl:flex-row-reverse justify-between mt-20 md:mx-20 mx-0 flex-col'>
        <div className='h-auto xl:w-5/12 w-full flex flex-wrap text-6xl font-semibold ml-3 text-white'>
        You never have to change the link in your bio again
        <p className='text-base my-5'>Linktree was the first ‘link in bio’ platform made to solve this problem. Linktree has since become so much more. Allowing businesses or creators to get more out of their social media, grow their following, easily take payments and take back control of how your content is discovered.</p>
        </div>
        <div className='my-auto mb-6 '><img src={blueafrowomen} alt='red-afro-lady' className='rounded-lg mr-1 shake' /></div>
        </div>
     </div>


     <div className='bg-green-500 w-full h-auto z-30'>
      <div className='flex lg:flex-row justify-between mt-20 md:mx-20 mx-0 flex-col'>
        <div className='h-auto lg:w-5/12 w-full flex flex-wrap text-6xl font-semibold text-white'>
        Grow your followers across all your social platforms
        <p className='text-base my-5'>Give your followers easy access to all of your content in one simple link. Now everything you do is just one tap away!Sell your products, take payments, and even include “support me” links to let your audience support, tip or donate.</p>
        </div>
        <div className='my-auto mb-6'><img src={greenblond} alt='red-afro-lady' className='rounded-lg mx-1 shake' /></div>
        </div>
     </div>


     <div className='bg-red-500 w-full h-auto z-30'>
     <div className='flex xl:flex-row-reverse justify-between mt-20 md:mx-20 mx-0 flex-col'>
        <div className='h-auto xl:w-5/12 w-full flex flex-wrap text-6xl font-semibold text-white'>
        Grow with in-depth user analytics
        <p className='text-base my-5'>Use powerful analytics to know what your followers are engaging with, and use the insights to grow your followers and business.</p>
        </div>
        <div className='my-auto mb-6'><img src={redgroup} alt='red-afro-lady' className='rounded-lg mx-1 shake' /></div>
        </div>
     </div>



     <div className='bg-gray-200 w-full h-auto z-30'>
      <div className='flex  my-20 mx-auto flex-col text-5xl font-extrabold text-gray-900'>
       <div className='mx-auto font-extrabold text-7xl'>Trusted By</div> 
       <div className='mx-auto text-blue-900 font-extrabold text-7xl'>{currentPersona}</div>
        </div>
     </div>


     <div className=' w-full h-auto z-30' style={{backgroundColor:'rgb(208, 230, 34)'}}>
     <div className='mx-auto font-extrabold text-7xl text-gray-100 w-4/6 justify-around mt-10'>Linktree is for everyone, not just celebrities and big brands</div> 
      <div className='my-20 w-full flex flex-col md:flex-wrap md:flex-row justify-evenly'>       
         {Imagepic.map((e,idx)=>(
            <Introcard value={e} key={idx} /> 
         ))}
        </div>
     </div>


     <div className='bg-red-900 w-full h-auto z-30'>
      <div className='flex  my-20 flex-col  '>
       <div className='mx-auto font-extrabold text-7xl text-gray-100'>FAQ's</div> 
         {faq.map((e,idx)=>(
           <div className=' text-gray-100'> <FaqCards value={e} key={idx} /> </div>
         ))}
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