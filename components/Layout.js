import Link from 'next/link.js'
import { Fragment } from 'react'

const Layout = ( props ) => {
   return (
      <Fragment>
         <nav className='relative h-16 bg-greenNav w-full flex justify-around '>
            <div className="flex space-x-1 basis-1/3">
               <Link href="/posts">All Posts</Link>
               <Link href="/posts">Your Posts</Link>
               <div>
                  <ul className="absolute py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                     <li>
                        <Link className=" z-10 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/posts/react">React</Link>
                     </li>
                     <li>
                        <Link className="z-10 block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" href="/posts/react">Express.js</Link>
                     </li>
                     <li>
                        <Link className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white z-10" href="/posts/react">Next.js</Link>
                     </li>
                     <li>
                        <Link className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white z-10" href="/posts/react">Redux</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className='basis-1/3 bg-slate-800'>
               <span>Junaid</span>
               <span>Notes</span>
            </div>
            <div className="flex space-x-8 basis-1/3 bg-orange-800">
               <Link href="/login">Login</Link>
               <Link href="/register">Register</Link>
            </div>
         </nav>
         {props.children}
      </Fragment>
   )
}

export default Layout