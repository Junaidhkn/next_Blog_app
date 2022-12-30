import React from 'react'
import PostItem from './PostItem.js'

const PostsGrid = ( props ) => {
   const { posts } = props
   return (
      <ul>
         {posts.map( ( post ) => {
            <PostItem key={post.slug} post={post} />
         } )}
      </ul>
   )
}

export default PostsGrid