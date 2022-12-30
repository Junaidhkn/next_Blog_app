import React from 'react'
import PopularPostItem from './PopularPostItem.js'

const PopularPostsGrid = ( props ) => {
   const { posts } = props
   return (
      <ul>
         {posts.map( ( post ) => {
            <PopularPostItem key={post.slug} post={post} />
         } )}
      </ul>

   )
}

export default PopularPostsGrid