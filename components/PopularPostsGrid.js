import React from 'react'

const PopularPostsGrid = () => {
   return (
      <div><Link href='/' className="hover:outline outline-2 outline-emerald-100  hover:drop-shadow-md">
         <div className="p-5 ">
            <div className='container mt-8'>
               <div className=" w-[430]">
                  <span className="p-1 bg-greenFooter text-xs">React.js</span>
                  <h3 className="mt-1 font-[600] leading-[150%] text-[17px]">I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
                  <div className="m-2 flex space-x-7 text-xs font-thin">
                     {/* Add Icons */}
                     <p>Junaid Khan</p>
                     <p>27/12/2022</p>
                  </div>
                  <p className="leading-[22.5px] text-[15px] w-[430]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa el...</p>
               </div>
            </div>
         </div>

      </Link></div>
   )
}

export default PopularPostsGrid