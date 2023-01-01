import React from 'react'
import { getFrontendPosts } from '../../helper/utils.js'
import PostItem from '../../components/PostItem.js';

const frontend = ( props ) => {
   const { posts } = props;
   return (
      <main className='mt-10 w-full flex flex-col justify-center items-center mb-20'>
         <ul>
            {posts.map( ( post ) => (
               <li className='xs:w-[340px] lg:w-[550px] xl:w-[750px] xxl:w-[900px]'>
                  <PostItem key={post.slug} post={post} />
               </li>
            ) )}
         </ul>
      </main>
   )
}

export default frontend



export function getStaticProps () {
   const frontendPosts = getFrontendPosts();

   return {
      props: {
         posts: frontendPosts,
      },
   };
}