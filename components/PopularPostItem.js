import Link from 'next/link.js';
import React from 'react'
import { BsPerson } from 'react-icons/bs';
import { MdOutlineDateRange } from 'react-icons/md';

const PopularPostItem = ( props ) => {
   const { tag, title, excerpt, date, slug } = props.post;

   const formattedDate = new Date( date ).toLocaleDateString( 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
   } );

   const linkPath = `/posts/${slug}`;
   return (
      <div className='hover:outline outline-2 outline-emerald-100  hover:drop-shadow-md mb-6'>
         <Link href={linkPath} className="hover:outline outline-2 outline-emerald-100  hover:drop-shadow-md">
            <div className="p-5 ">
               <div className='container mt-8'>
                  <div className=" w-[430]">
                     <span className="p-1 bg-greenFooter text-xs">{tag}</span>
                     <h3 className="mt-1 font-[600] leading-[150%] text-[17px]">{title}</h3>
                     <div className="m-2 flex space-x-7 text-xs font-thin">
                        <p className='flex gap-3'>
                           <BsPerson />
                           Junaid Hassan Khan
                        </p>
                        <p className='flex gap-3'>
                           <MdOutlineDateRange />
                           {formattedDate}
                        </p>
                     </div>
                     <p className="leading-[22.5px] text-[15px] w-[430]">{excerpt}</p>
                  </div>
               </div>
            </div>

         </Link>
      </div>
   )
}

export default PopularPostItem