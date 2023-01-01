import React from 'react'
import PopularPostItem from './PopularPostItem.js'

const PopularPostsGrid = ( props ) => {
   const { posts } = props;
   return ( <main className='mt-10 mr-8 w-full flex flex-col justify-center items-center mb-10'>
      <ul>
         {posts.map( ( post ) => (
            <li key={post.slug} className='w-[400px]'>
               <PopularPostItem key={post.slug} post={post} />
            </li>
         ) )}
      </ul>
   </main>
   )
}

export default PopularPostsGrid