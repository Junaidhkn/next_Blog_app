import React from 'react'
import PopularPostItem from './PopularPostItem.js'

const PopularPostsGrid = ( props ) => {
   console.log( 'forth' );
   const { posts } = props;
   console.log( posts )
   return <main className='mt-10 mr-8 w-full flex flex-col justify-center items-center mb-10'>
      <ul>
         {posts.map( ( post ) => (
            <li className='w-[400px]'>
               <PopularPostItem key={post.slug} post={post} />
            </li>
         ) )}
      </ul>
   </main>
   // return ( <main>
   //    <ul>
   //       {posts.map( ( post ) => {
   //          <PopularPostItem key={post.slug} post={post} />
   //       } )}
   //    </ul>
   // </main>

}

export default PopularPostsGrid