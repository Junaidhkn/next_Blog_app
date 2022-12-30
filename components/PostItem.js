import React from 'react'

const PostItem = ( props ) => {
   const { tag, title, image, excerpt, date, slug } = props.post;

   const formattedDate = new Date( date ).toLocaleDateString( 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
   } );

   const imagePath = `/images/posts/${slug}/${image}`;
   const linkPath = `/posts/${slug}`;
   return (
      <div>
         <Link href={linkPath} className="hover:outline outline-2 outline-emerald-100  hover:drop-shadow-md">
            <div className="flex justify-evenly gap-8 mb-10 pb-10">
               <div className='flex flex-col w-96 h-64'>
                  <div className='container mt-8'>
                     <div className=" w-[430]">
                        <span className="p-1 bg-greenFooter text-xs">{tag}</span>
                        <h3 className="mt-1  text-3xl font-[600] leading-[37.5px] text-[27px]">{title}</h3>
                        <div className="m-2 mt-3 mb-8 flex space-x-7 text-sm font-thin">
                           {/* Add Icons */}
                           <p>Junaid Hassan Khan</p>
                           <p>{formattedDate}</p>
                        </div>
                        <p className="leading-[22.5px] text-[15px] w-[430]">{excerpt}</p>
                     </div>
                  </div>
               </div>
               <div className="relative w-[350px] h-[250px] mt-20">
                  <div className="absolute w-[150px] h-[171px] -left-[20px] -top-[20px] z-0 opacity-80 bg-greenNav"></div>
                  <Image src={imagePath} className="absolute w-full h-full z-10" width={300} height={230} />
               </div>
            </div>

         </Link>
      </div>
   )
}

export default PostItem