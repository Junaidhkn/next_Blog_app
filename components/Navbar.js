import Link from 'next/link.js';
import { useState } from 'react';

const Navbar = () => {
	const [open, setOpen] = useState( false );

	const btnClass = open
		? `block hamburger lg:hidden focus:outline-none open`
		: `block hamburger lg:hidden focus:outline-none`;
	const menuClass = !open
		? `absolute hidden z-40 flex-col items-center justify-center py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-center`
		: `absolute flex-col z-40 items-center justify-center py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-center`;
	return (
		<nav className='relative h-16 bg-greenNav w-full flex items-center justify-between lg:items-center lg:justify-around '>
			<div className='flex basis-3/4 items-center justify-center'>
				<Link href='/'>
					<span className='bg-greenSuper text-neutral-50 text-2xl p-2 rounded-2xl'>
						Junaid@
					</span>
					<span>
						Notes <span className='text-greenSuper font-extrabold'>.</span>
					</span>
				</Link>
			</div>
			<div className='hidden lg:flex space-x-1 basis-1/3 items-center justify-center'>
				<Link
					className='block py-2 px-4 text-greenSuper hover:border border-solid border-greenSuper hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					href='/posts'>
					All Posts
				</Link>

				<Link
					className='block py-2 px-4 text-greenSuper hover:border border-solid border-greenSuper hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					href='/posts/frontend'>
					Frontend
				</Link>

				<Link
					className='block py-2 px-4 text-greenSuper hover:border border-solid border-greenSuper hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
					href='/posts/backend'>
					Backend
				</Link>
			</div>
			<div className=''>
				<button
					onClick={() => {
						setOpen( !open );
					}}
					className={btnClass}>
					<span className='hamburger-top'></span>
					<span className='hamburger-middle'></span>
					<span className='hamburger-bottom'></span>
				</button>
			</div>

			<div>
				<div
					className={menuClass}
					onClick={() => {
						setOpen( false );
					}}>
					<Link
						className='block py-2 px-4 text-greenSuper hover:border border-solid border-greenSuper hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						href='/posts'>
						All Posts
					</Link>
					<Link
						className='block py-2 px-4 text-greenSuper hover:border border-solid border-greenSuper hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						href='/posts/frontend'>
						Frontend
					</Link>

					<Link
						className='block py-2 px-4 text-greenSuper hover:border border-solid border-greenSuper hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
						href='/posts/backend'>
						Backend
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
