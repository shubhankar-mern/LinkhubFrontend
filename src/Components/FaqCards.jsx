import React, { useState } from 'react'

const FaqCards = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div
    className={` md:w-3/6 w-full bg-red-700 m-3 mx-auto rounded-3xl flex flex-col ${
      isOpen ? 'h-auto' : 'h-36'
    }`} onClick={toggleAnswer}
  >
    <div className='mt-16 mx-10 cursor-pointer font-extrabold text-xl' >
     {props.value.q}
    </div>
    {isOpen && (
      <div className='mt-1 mx-10 mb-7'>
        {props.value.a}
      </div>
    )}
  </div>
  )
}

export default FaqCards