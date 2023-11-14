import React, {useEffect} from 'react'
import Footers from '../Components/Footer'
import Navbar from '../Components/Navbar';
const Terms = () => {
    
  return (
    <div className='bg-gray-100'>
        <Navbar/>
        <div className=' h-auto mb-36'>
            {/* banner is done */}
                <div className=' h-fit w-100 flex justify-around  flex-col'>
                    <div className='flex flex-row justify-start lg:w-6/12 h-fit border lg:text-5xl text-2xl font-bold lg:mx-auto mt-24'>
                    
                    </div>
                    {/* <BannerHome/> */}
                    <div className='flex flex-wrap lg:w-6/12 h-fit border lg:text-5xl text-2xl font-bold mt-20 mx-auto bg-gradient-to-r from-gray-700 via-gray-400 to-gray-200 text-white'>
                    Terms & Conditions
                    </div>
                </div>

           <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-xl'>
            <div className='text-2xl font-bold mt-10 '>Overview</div>
           <span>By accessing the website at https://uiuxjobsboard.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. 
            If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</span>
           </div>


           <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0 mx-auto shadow-xl'>
            <div className='text-2xl font-bold mt-10'>Use License</div>
           <ul>
            <li className='list-disc'>
            Permission is granted to temporarily download one copy of the materials (information or software) on UIUXjobsboard's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
             <ul className='font-extralight p-12'>
              <li className='list-decimal'>modify or copy the materials;</li>
              <li className='list-decimal'>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li className='list-decimal'>transfer the materials to another person or "mirror" the materials on any other server.</li>
             </ul>
            </li>
            <li className='list-disc'>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by UIUXjobsboard at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </li>
           </ul>
           </div>

           <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-xl'>
            <div className='text-2xl font-bold mt-10'>Disclaimer</div>
            <ul>
            <li className='list-disc'>
            The materials on UIUXjobsboard's website are provided on an 'as is' basis. UIUXjobsboard makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </li>
            <li className='list-disc'>
            Further, UIUXjobsboard does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </li>
           </ul>
           </div>


           <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-xl'>
            <div className='text-2xl font-bold mt-10'>Limitations</div>
           <span>In no event shall UIUXjobsboard or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on UIUXjobsboard's website, even if UIUXjobsboard or a UIUXjobsboard authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</span>
           </div>

           <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-xl'>
            <div className='text-2xl font-bold mt-10'>Accuracy of materials</div>
           <span>The materials appearing on UIUXjobsboard's website could include technical, typographical, or photographic errors. UIUXjobsboard does not warrant that any of the materials on its website are accurate, complete or current. UIUXjobsboard may make changes to the materials contained on its website at any time without notice. However UIUXjobsboard does not make any commitment to update the materials.</span>
           </div>

           <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-xl'>
            <div className='text-2xl font-bold mt-10'>Links</div>
           <span>UIUXjobsboard has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by UIUXjobsboard of the site. Use of any such linked website is at the user's own risk.</span>
           </div>


           <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-xl'>
            <div className='text-2xl font-bold mt-10'>Modifications</div>
           <span>UIUXjobsboard may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</span>
           </div>

           <div className='flex  font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-xl'>
            <div className='text-2xl font-bold mt-10'>Contact Us</div>
           <span>For any questions or concerns regarding about the Terms of Service, you may contact us using the following details: hello@uiuxjobsboard.com</span>
           </div>

        </div>
      <Footers/>
    </div>
  )
}

export default Terms