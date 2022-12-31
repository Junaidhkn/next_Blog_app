import React from 'react'
import PostItem from './PostItem.js'

const PostsGrid = ( props ) => {
   const { posts } = props
   return (
      <ul>
         {posts.map( ( post ) => {
            <li className='hover:outline outline-2 outline-emerald-100 '>
               <PostItem key={post.slug} post={post} />
            </li>
         } )}
      </ul>
   )
}

export default PostsGrid