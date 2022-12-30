import React from 'react'
import PopularPostItem from './PopularPostItem.js'

const PopularPostsGrid = () => {
   const { popularPosts } = props
   return (
      <ul>
         {popularPosts.map( ( post ) => {
            <PopularPostItem key={post.slug} post={popularPosts} />
         } )}
      </ul>

   )
}

export default PopularPostsGrid