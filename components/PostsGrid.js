import PostItem from "./PostItem.js";


const PostsGrid = ( props ) => {
   console.log( 'Second' )
   console.log( props );
   const { posts } = props;
   return ( <main className='mt-10 w-full flex flex-col justify-center items-center mb-20'>
      <ul>
         {posts.map( ( post ) => (
            <li className='w-[850px]'>
               <PostItem key={post.slug} post={post} />
            </li>
         ) )}
      </ul>
   </main>
      // <ul>
      //    {posts.map( ( post ) => {
      //       <li className='hover:outline outline-2 outline-emerald-100 '>
      //          <PostItem key={post.slug} post={post} />
      //       </li>
      //    } )}
      // </ul>
   )
}

export default PostsGrid