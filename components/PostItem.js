import React from 'react'

const PostItem = () => {
   return (
      <div><Link href='/' className="hover:outline outline-2 outline-emerald-100  hover:drop-shadow-md">
         <div className="flex justify-evenly gap-8 mb-10 pb-10">
            <div className='flex flex-col w-96 h-64'>
               <div className='container mt-8'>
                  <div className=" w-[430]">
                     <span className="p-1 bg-greenFooter text-xs">React.js</span>
                     {/* <h3 className="mt-1  text-3xl font-[600] leading-[37.5px] text-[27px]">{title}</h3> */}
                     <div className="m-2 mt-3 mb-8 flex space-x-7 text-sm font-thin">
                        {/* Add Icons */}
                        <p>Junaid Hassan Khan</p>
                        <p>27/12/2022</p>
                     </div>
                     <p className="leading-[22.5px] text-[15px] w-[430]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa eligendi eos doloribus eius, obcaecati sed, voluptates culpa vel similique. Quos odit sit et nostrum asperiores? Alias aliquid nemo incidunt...</p>
                  </div>
               </div>
            </div>
            <div className="relative w-[350px] h-[250px] mt-20">
               <div className="absolute w-[150px] h-[171px] -left-[20px] -top-[20px] z-0 opacity-80 bg-greenNav"></div>
               <Image src='/images/blog.jpg' className="absolute w-full h-full z-10" width={300} height={230} />
            </div>
         </div>

      </Link></div>
   )
}

export default PostItem