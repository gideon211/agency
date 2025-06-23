import React from 'react'
import { Carousel } from 'flowbite-react'
import  banner1 from '../assets/banner1.svg'


const Home = () => {
  return (
    <div className='bg-neutralSilver'>
          <div className='px-4  lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen '>
                     <Carousel className='w-full mx-auto no-scrollbar  !overflow-x-hidden snap-mandatory '>
                                  <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 ">
                                      <div>
                                             <img src={banner1} alt='"'></img>
                                      </div>
                                      {/* hero text */}
                                      <div >
                                             <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className=' text-brandPrimary leading-snug'> from 8 years</span></h1>
                                             <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                                             <button className='btn-primary'>Register</button>
                                      </div>
                                    </div>
                                        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                                      <div>
                                             <img src={banner1} alt='"'></img>
                                      </div>
                                      {/* hero text */}
                                      <div>
                                             <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug whitespace-nowrap'>Let's Learn and Earn<span className='text-brandPrimary block '> in 4 Months</span> </h1>
                                             <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                                             <button className='btn-primary'>Register</button>
                                      </div>
                                    </div>
                                          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                                      <div>
                                             <img src={banner1} alt='"'></img>
                                      </div>
                                      {/* hero text */}
                                      <div>
                                       <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                                       <span className='whitespace-nowrap'>Learn and Earn Money</span>
                                       <span className='block text-brandPrimary leading-snug'>in 4 Months</span>
                                        </h1>

                                             <p className='text-neutralDGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
                                             <button className='btn-primary'>Register</button>
                                      </div>
                                    </div>
                        </Carousel>
              </div>

    
    </div>
  )
}

export default Home