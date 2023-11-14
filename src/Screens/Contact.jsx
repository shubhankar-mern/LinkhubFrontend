import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
const Contact = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <div className='h-auto mb-36'>
        {/* Banner section */}
        <div className=' h-fit w-100 flex justify-around flex-col '>
          <div className='flex flex-wrap lg:w-6/12 h-fit border lg:text-5xl text-2xl font-bold mt-20 mx-auto text-white bg-gradient-to-r from-gray-700 via-gray-400 to-gray-200'>
            Contact Us
          </div>
        </div>

        {/* Contact Form section */}
        <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0 mx-auto shadow-lg'>
          <div className='text-2xl font-bold mt-10'>Get in Touch</div>
          <span>
            We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach out to us using the form below.
          </span>

          {/* Add your contact form component or code here */}
          {/* Example: <ContactForm /> */}
        </div>

        {/* Additional Contact Information section */}
        <div className='flex font-mono flex-col flex-wrap md:w-6/12 border p-10 pt-0 mx-auto shadow-lg'>
          <div className='text-2xl font-bold mt-10'>Additional Information</div>
          <span>
            If you prefer other means of contact, you can also reach us using the following details:
            <br />
            Email: info@linkhub.com
            <br />
            Phone: +123 456 7890
            <br />
            Address: 123 Main Street, Cityville, Country
          </span>
        </div>

      </div>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Contact;
