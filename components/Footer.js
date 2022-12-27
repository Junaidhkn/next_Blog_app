import Link from 'next/link.js';

const footer = () => {
	return (
		<footer className='flex flex-col w-full'>
			<div className='flex justify-around px-16 py-10 h-64 bg-greenFooter'>
				<div className='flex basis-1 flex-col'>
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
					<h3 className=''>Blogs</h3>
					<ul className=''>
						<li className=''>
							<Link href='#'>All Posts</Link>
						</li>
						<li className=''>
							<Link href='#'>React.js</Link>
						</li>
						<li className=''>
							<Link href='#'>Next.js</Link>
						</li>
						<li className=''>
							<Link href='#'>Express.js</Link>
						</li>
					</ul>
				</div>
				<div className=''>
					<h3 className=''>Subscribe For Newsletter</h3>
					<input
						className=''
						type='text'
					/>
					<button className=''>Subscribe</button>

					{/*  Add social links Here */}
				</div>
			</div>
			<div className='flex mx-auto justify-center items-center'>
				<p>&copy;Copyrights: All Rights Reserved.</p>
				<span>
					Made with love by{' '}
					<span>
						<Link href='https://www.upwork.com/freelancers/junaidniazi'>
							Junaid Hassan Khan
						</Link>
					</span>
				</span>
			</div>
		</footer>
	);
};

export default footer;
