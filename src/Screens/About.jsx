import React from 'react'
import Footers from '../Components/Footer'
import Navbar from '../Components/Navbar';
const About = () => {
  return (
    <div className='bg-gray-100'>
        <Navbar/>
        <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0  mx-auto my-16 shadow-2xl'>
  <div className='text-4xl font-bold mt-10 text-white bg-gradient-to-r from-gray-700 via-gray-400 to-gray-200 my-3'>About Us</div>
  <span>
   Linkhub is empowering brands, artists, publishers, agencies, and influencers to take better control of their online presence. As the internet landscape became more fragmented, we expanded Linktree’s functionality to better serve our diverse user base and streamline the content-sharing process.
    <br/>
    We are a passionate team of developers, designers, marketers, and business operations professionals, dedicated to providing content creators with the best tools to showcase their work. Headquartered in Melbourne, Australia, we've extended our footprint with offices in Sydney and Los Angeles.
    <br/>

    In 2019, we were honored to be included in CNBC’s 'Upstart 100,' a list recognizing the brightest and most intriguing young startups with the potential to become industry leaders. Fast forward to March 2020, Linkhub earned a place in Fast Company’s 'Most Innovative Companies of 2020' list, securing the fourth spot in the Social Media category, alongside notable names like Glossier and Reddit.
   <br/>
    Founded in India by Shubhankar Singh, Linkhub continues to innovate and empower users globally, bridging the gap in online content sharing and making a mark in the digital landscape.
  </span>
</div>

        <p><Footers/></p>
    </div>
  )
}

export default About