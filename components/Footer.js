import Link from 'next/link.js';

const footer = () => {
	return (
		<footer className='flex flex-col w-full'>
			<div className='flex justify-around px-16 py-10 h-64 bg-greenFooter'>
				<div className='flex basis-1 flex-col gap-7'>
					<Link href='/'>
						<span className='bg-greenSuper text-neutral-50 text-2xl p-2 rounded-2xl'>
							Junaid@
						</span>
						<span>
							Notes <span className='text-greenSuper font-extrabold'>.</span>
						</span>
					</Link>
					<p className='mt-8 w-60 text-fontBlack'>
						Did you come here for something in particular or just general Riker
					</p>
				</div>
				<div>
					<h3 className='font-[600] text-[17px] leading-[100%] mb-10'>Blogs</h3>
					<ul className=''>
						<li className='font-[400] text-[15px] leading-[100%] mb-5 hover:text-greenSuper'>
							<Link href='/posts'>All Posts</Link>
						</li>
						<li className='font-[400] text-[15px] leading-[100%] mb-5 hover:text-greenSuper'>
							<Link href='/posts/frontend'>React.js</Link>
						</li>
						<li className='font-[400] text-[15px] leading-[100%] mb-5 hover:text-greenSuper'>
							<Link href='/posts/frontend'>Next.js</Link>
						</li>
						<li className='font-[400] text-[15px] leading-[100%] mb-5 hover:text-greenSuper'>
							<Link href='/posts/backend'>Express.js</Link>
						</li>
					</ul>
				</div>
				<div className=''>
					<h3 className='font-[600] text-[17px] leading-[100%] mb-7'>
						Subscribe For Newsletter
					</h3>
					<input
						className='w-[315px] h-[45px] bg-greenNav p-3 focus:outline-none rounded'
						type='text'
					/>
					<button className='w-[115px] h-[45px] bg-[#00AAA1] p-3 focus:outline-none rounded text-white hover:bg-green-600 mb-5'>
						Subscribe
					</button>
					<p className='font-[600] text-[15px] leading-[100%] mb-5'>Links</p>
					<div className='flex gap-2'>
						{/* <Link></Link>
						<Link></Link> */}
					</div>
					{/*  Add social links Here */}
				</div>
			</div>
			<div className='bg-greenGray w-full h-[1px]'></div>
			<div className='w-full flex justify-evenly mx-auto items-center gap-9 bg-greenFooter h-14'>
				<p>
					Made with ❤️ by{'  '}
					<span className='text-greenSuper'>
						<Link
							href='https://www.upwork.com/freelancers/junaidniazi'
							target='_blank'>
							Junaid Hassan Khan
						</Link>
					</span>
				</p>
				<p className='font-bold text-gray-600'>&copy; All Rights Reserved. Copyrights 2022 - 23</p>
			</div>
		</footer>
	);
};

export default footer;
