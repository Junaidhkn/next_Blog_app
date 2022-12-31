import Head from 'next/head';
import { Fragment } from 'react';

import PostDetail from '../../components/PostDetail';
import { getPostData, getPostsFiles } from '../../helper/utils.js';

function PostDetailPage ( props ) {

   return (
      <Fragment>
         <Head>
            <title>{props.post.title}</title>
            <meta name='description' content={props.post.excerpt} />
         </Head>
         <PostDetail post={props.post} />
      </Fragment>
   );
}

export function getStaticProps ( context ) {
   const { params } = context;
   const { postSlug } = params;

   const postData = getPostData( postSlug );

   return {
      props: {
         post: postData,
      },
      // revalidate: 600,
   };
}

export function getStaticPaths () {
   const postFilenames = getPostsFiles();

   const slugs = postFilenames.map( ( fileName ) => fileName.replace( /\.md$/, '' ) );
   const params = slugs.map( ( slug ) => ( { params: { postSlug: slug } } ) )
   console.log( params );
   return {
      paths: params,
      fallback: false,
   };
}

export default PostDetailPage;
