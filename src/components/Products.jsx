import React from 'react'
import product1 from '../assets/icons/product1.png'
import product2 from '../assets/icons/product2.png'
import company1 from '../assets/company1.jpg';
import company2 from '../assets/company2.png';      
import company3 from '../assets/company3.png';
import company4 from '../assets/company4.png';
import company5 from '../assets/company5.png';
import company6 from '../assets/company6.png';
import company7 from '../assets/company7.png';

function Products() {
  return (
    <div id='products' className='mt-20'>
                     <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mb-11">
                       <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                         <div>
                           <img src={product1} alt="About Pixelgrade illustration" />
                         </div>
                         <div className="md:w-3/5 mx-auto">
                           <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
                             How to design your site footer like we did
                           </h2>
                           <p className="md:w-3/4 text-sm text-neutralDGrey mb-8 ">
                           Until a eros just. Fusce needs a sad ultrice. For the time being, the advertisement was not a company, but the mass of the casino was now a big one. Until then, there was a soft basketball player. He is said to have lived in this street. I live in the vehicles of Leo, but the door is only for easy purposes. In Euismod auge vitae, except for the ultricies, there are no trucks for tincidunt. In the whole, unless it is necessary, no advantage is gained by any mass. It is a trigger, with limits and if not, the hendrerit venenatis libero. Until it is followed by the throat of the pregnant woman.
                           </p>
                           <button className="btn-primary">
                             Learn More
                           </button>
                         </div>
                       </div>
                       </div>

                       <div>
                              <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mb-11 bg-neutralSilver p-6">
                       <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-24">
                         <div>
                           <img src={product2} alt="About Pixelgrade illustration" />
                         </div>
                         <div className="md:w-3/5 mx-auto">
                           <p className=" text-neutralDGrey mb-8 text-sm leading-7">
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                            
                            <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                            <p className='text-xs text-neutralGrey'>British Dragon Boat Racing Association</p>
                           <br />
                                   <div className=" flex flex-wrap gap-8 items-center">
                                     <img src={company1} alt="Company 1" className='cursor-pointer'/>
                                     <img src={company2} alt="Company 2" className='cursor-pointer'/>
                                     <img src={company3} alt="Company 3" className='cursor-pointer'/>
                                     <img src={company4} alt="Company 4" className='cursor-pointer'/>
                                     <img src={company5} alt="Company 5" className='cursor-pointer'/>
                                     <img src={company6} alt="Company 6" className='cursor-pointer'/>
                                     <img src={company7} alt="Company 7" className='cursor-pointer'/>

                                     <a className='text-brandPrimary text-xl font-bold hover:text-neutral-700 cursor-pointer'>Meet all customers <span> →</span></a>


                                   </div>
                           </p>
                         </div>
                       </div>
                       </div>
                       </div>
               
    </div>
  )
}

export default Products