import Link from 'next/link.js';

const Navbar = () => {
	return (
		<nav className='relative h-16 bg-greenNav w-full flex justify-around '>
			<div className='flex space-x-1 basis-1/3 items-center justify-center'>
				<Link
					className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					href='/posts/frontend'>
					React/Next.js
				</Link>

				<Link
					className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					href='/posts/backend'>
					Express.js
				</Link>

				<Link
					className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					href='/posts'>
					All Posts
				</Link>
			</div>
			<div className='flex basis-1/3 items-center justify-center'>
				<Link href='/'>
					<span className='bg-greenSuper text-neutral-50 text-2xl p-2 rounded-2xl'>
						Junaid@
					</span>
					<span>
						Notes <span className='text-greenSuper font-extrabold'>.</span>
					</span>
				</Link>
			</div>
			<div className='flex space-x-8 basis-1/3 items-center justify-center'>
				<Link href='/auth/login'>Login</Link>
				<Link href='/auth/register'>Register</Link>

			</div>
		</nav>
	);
};

export default Navbar;
