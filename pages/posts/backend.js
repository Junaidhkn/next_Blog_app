import { getBackendPosts } from '../../helper/utils.js'
import PostItem from '../../components/PostItem.js';

const backend = ( props ) => {
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

export default backend



export function getStaticProps () {
   const frontendPosts = getBackendPosts();

   return {
      props: {
         posts: frontendPosts,
      },
   };
}