import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join( process.cwd(), 'posts' );

export function getPostsFiles () {
   return fs.readdirSync( postsDirectory );
}

export function getPostData ( postIdentifier ) {
   const postSlug = postIdentifier.replace( /\.md$/, '' ); // removes the file extension
   const filePath = path.join( postsDirectory, `${postSlug}.md` );
   const fileContent = fs.readFileSync( filePath, 'utf-8' );
   const { data, content } = matter( fileContent );

   const postData = {
      slug: postSlug,
      ...data,
      content,
   };

   return postData;
}

export function getAllPosts () {
   const postFiles = getPostsFiles();

   const allPosts = postFiles.map( postFile => {
      return getPostData( postFile );
   } );

   const sortedPosts = allPosts.sort( ( postA, postB ) => postA.date > postB.date ? -1 : 1 );

   return sortedPosts;
}

export function getFeaturedPosts () {
   const allPosts = getAllPosts();

   const featuredPosts = allPosts.filter( post => post.isFeatured );

   return featuredPosts;
}

export function getPopularPosts () {
   const allPosts = getAllPosts();

   const popularPosts = allPosts.filter( post => post.isPopular );

   return popularPosts;
}

export function getFrontendPosts () {
   const allPosts = getAllPosts();

   const frontendPosts = allPosts.filter( post => post.frontend );

   return frontendPosts;
}

export function getBackendPosts () {
   const allPosts = getAllPosts();

   const backendPosts = allPosts.filter( post => post.backend );

   return backendPosts;
}