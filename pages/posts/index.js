import Image from 'next/image.js'
import React from 'react'
import { getAllPosts } from '../../helper/utils.js'
import PostItem from '../../components/PostItem.js';

const Posts = ( props ) => {
   const { posts } = props;
   return (
      <main className='mt-10 w-full flex flex-col justify-center items-center mb-20'>
         <ul>
            {posts.map( ( post ) => (
               <li className='w-[900px]'>
                  <PostItem key={post.slug} post={post} />
               </li>
            ) )}
         </ul>
      </main>
   )
}

export default Posts



export function getStaticProps () {
   const allPosts = getAllPosts();

   return {
      props: {
         posts: allPosts,
      },
   };
}