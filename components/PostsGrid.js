import PostItem from "./PostItem.js";


const PostsGrid = ( props ) => {
   const { posts } = props;
   return ( <main className='mt-10 w-full flex flex-col justify-center items-center mb-20'>
      <ul>
         {posts.map( ( post ) => (
            <li key={post.slug} className='xs:w-[340px] lg:w-[550px] xl:w-[750px]'>
               <PostItem key={post.slug} post={post} />
            </li>
         ) )}
      </ul>
   </main>
   )
}

export default PostsGrid