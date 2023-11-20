import React from 'react'

const Introcard = (props) => {
  return (
    <div className='w-full md:w-3/12 h-auto bg-white md:m-10 my-2 rounded-3xl'>
        <div className='mx-auto w-32 h-32 rounded-full bg-slate-700 my-10'><img src={props.value} className='w-32 h-32 rounded-full'/></div>
        <div className='text-black font-semibold my-8 md:mx-3 mx-0'>Business Owner</div>
        <div className='text-black my-10 mx-3'>Curate your businesses’ entire online identity with one link. Connect your followers to your social media channels, your latest blog articles, your website.</div>
    </div>
  )
}

export default Introcard