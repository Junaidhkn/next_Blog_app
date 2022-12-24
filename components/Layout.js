import Link from 'next/link.js';
import { Fragment } from 'react';

const Layout = (props) => {
	return (
		<Fragment>
			<nav className='relative h-16 bg-greenNav w-full flex justify-around '>
				<div className='flex space-x-1 basis-1/3 items-center justify-center'>
					<Link
						className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						href='/posts'>
						All Posts
					</Link>
					<Link
						className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						href='/posts/react'>
						Express.js
					</Link>
					<Link
						className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						href='/posts/react'>
						React/Next.js
					</Link>
				</div>
				<div className='flex basis-1/3 items-center justify-center'>
					<Link href='/'>
						<span className='bg-greenSuper text-2xl p-2 rounded-2xl'>
							Junaid@
						</span>
						<span className=''>Notes.</span>
					</Link>
				</div>
				<div className='flex space-x-8 basis-1/3 items-center justify-center'>
					<Link href='/login'>Login</Link>
					<Link href='/register'>Register</Link>
					{/* Add Dynamic Route - replace yourposts with username */}
					<Link
						className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						href='/posts/yourposts'>
						Your Posts
					</Link>
				</div>
			</nav>
			{props.children}
		</Fragment>
	);
};

export default Layout;
