import React from 'react'
import Footers from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Privacy = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar/>
        <div className='h-auto mb-36 '>
            {/* Banner section */}
            <div className=' h-fit w-100 flex justify-around  flex-col '>
                <div className='text-white flex flex-wrap lg:w-6/12 h-fit border lg:text-5xl text-2xl font-bold mt-20 mx-auto bg-gradient-to-r from-gray-700 via-gray-400 to-gray-200'>
                Privacy Policy
                </div>
            </div>

            {/* Overview section */}
            <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-lg'>
                <div className='text-2xl font-bold mt-10'>Overview</div>
                <span>
                Welcome to Linkhub, where we value your connection and privacy. It is our mission to provide a platform that respects your privacy and complies with all applicable laws and regulations regarding any personal information we may collect about you, including across our website, https://Linkhub.com, and other sites we own and operate. This policy is effective as of 26 November 2018 and was last updated on 7 September 2021.
                </span>
            </div>

            {/* Children’s Privacy section */}
            <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-lg'>
                <div className='text-2xl font-bold mt-10'>Children’s Privacy</div>
                <span>
                We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.
                </span>
            </div>

            {/* International Transfers of Personal Information section */}
            <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-lg'>
                <div className='text-2xl font-bold mt-10'>International Transfers of Personal Information</div>
                <span>
                The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information.
                </span>
            </div>

            {/* Your Rights and Controlling Your Personal Information section */}
            <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-lg'>
                <div className='text-2xl font-bold mt-10'>Your Rights and Controlling Your Personal Information</div>
                <span>
                You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information.
                
                </span>
            </div>

            {/* Use of Cookies section */}
            <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-lg'>
                <div className='text-2xl font-bold mt-10'>Use of Cookies</div>
                <span>
                We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.
                </span>
            </div>

            {/* Limits of Our Policy section */}
            <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-lg'>
                <div className='text-2xl font-bold mt-10'>Limits of Our Policy</div>
                <span>
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites and cannot accept responsibility or liability for their respective privacy practices.
                </span>
            </div>

            {/* Changes to This Policy section */}
            <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-lg'>
                <div className='text-2xl font-bold mt-10'>Changes to This Policy</div>
                <span>
                At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.
                </span>
            </div>

            {/* Contact Us section */}
            <div className='flex  font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto shadow-lg'>
                <div className='text-2xl font-bold mt-10'>Contact Us</div>
                <span>For any questions or concerns regarding Linkhub, you may contact us using the following details: hello@Linkhub.com</span>
            </div>

            </div>

        <p><Footers/></p>
    </div>
  )
}

export default Privacy