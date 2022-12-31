import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


function PostDetail ( props ) {
   const { post } = props;

   const imagePath = `/images/posts/${post.slug}/${post.image}`;

   const customRenderers = {
      p ( paragraph ) {
         const { node } = paragraph;

         if ( node.children[0].tagName === 'img' ) {
            const image = node.children[0];

            return (
               <div className='w-full max-w-[600px] my-5 mx-auto'>
                  <Image
                     src={`/images/posts/${post.slug}/${image.properties.src}`}
                     alt={image.alt}
                     width={600}
                     height={300}
                  />
               </div>
            );
         }

         return <p>{paragraph.children}</p>;
      },

      code ( code ) {
         const { className, children } = code;
         const language = className.split( '-' )[1]; // className is something like language-js => We need the "js" part here
         return (
            <SyntaxHighlighter
               style={materialDark}
               language={language}
               children={children}
            />
         );
      },
   };

   return (
      <main className='mx-20 p-4 my-5 font-[400] leading-[22.5px] text-[15px] font-[#666666]'>
         <h1 className="mt-1 mb-2 text-5xl font-[600]text-[27px]">{post.title}</h1>
         <span className="p-1 bg-greenFooter text-xs">{post.tag}</span>
         <article>
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
         </article>
      </main>
   );
}

export default PostDetail;
