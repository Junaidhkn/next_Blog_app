import React from 'react'
import PopularPostItem from './PopularPostItem.js'

const PopularPosts = ( props ) => {
   const { popularPosts } = props
   return (
      <ul>
         {popularPosts.map( ( post ) => {
            <PopularPostItem key={post.slug} post={popularPosts} />
         } )}
      </ul>
   )

}

export default PopularPosts