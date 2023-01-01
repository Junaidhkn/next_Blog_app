import Image from 'next/image.js';
import Link from 'next/link.js';
import { FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Header = () => {
	return (
		<div className='sm:py-5 md:flex md:px-10 md:py-5  lg:flex xl:flex xl:px-28 xl:py-10 md:justify-evenly lg:w-full h-[500px] bg-header'>
			<div className='flex flex-col items-center gap-4'>
				<div className='sm:w-[250px] sm:h-auto md:w-[250px]  lg:w-auto lg:h-auto'>
					<Image
						className='sm:rounded-full '
						alt='Junaid-Full stack Developer'
						src='/images/site/junaid.jpg'
						width={326}
						height={395}
						priority={true}></Image>
				</div>
				<p className='lg:hidden sm:font-[400] sm:text-[14px] font-[600] italic text-[18px] leading-[150%] mb-2'>
					"Full stack developer, full stack problem solver"
				</p>
				<h4 className='lg:hidden sm:font-[400] sm:text-[14px] font-[700] text-[18px]'>Follow On Social Links:</h4>
				<div className='lg:hidden mt-2 flex justify-start gap-10'>
					<div className='sm:text-3xl text-5xl text-blue-600'>
						<Link
							href='https://twitter.com/junaidHKNiazi'
							target='_blank'>
							<FaTwitter />
						</Link>
					</div>
					<div className='sm:text-3xl text-5xl text-green-600'>
						<Link
							href='https://www.upwork.com/freelancers/junaidniazi'
							target='_blank'>
							<SiUpwork />
						</Link>
					</div>
				</div>
			</div>
			<div className='sm:hidden md:flex flex-col w-2/4'>
				<h2 className='font-[600] text-2xl leading-[140%] mb-4'>
					Hi there! I'm Junaid Hassan Khan Niazi
				</h2>
				<p className='md:text-[14px] font-[400] text-[16px] leading-[22.5px] mb-2'>
					I am a full stack MERN developer with a focus on creating modern and
					responsive web applications. I have a strong foundation in both
					front-end and back-end technologies, and I am proficient in using the
					MERN stack (MongoDB, Express, React, and Node.js) to build
					high-quality software solutions.
				</p>
				<p className='font-[400] text-[16px] leading-[22.5px] mb-2'>
					{' '}
					I have a passion for building scalable and user-friendly web
					applications, and I am constantly learning and staying up to date with
					the latest technologies and best practices.
				</p>
				<p className='lg:font-[400] text-[16px] leading-[22.5px] mb-2'>
					On my blog, I share my experiences as a developer and offer insights
					and tips on a variety of topics related to web development. Thank you
					for visiting my site, I hope you find my content useful and
					informative.
				</p>
				<p className='md:hidden lg:block font-[600] italic text-[18px] leading-[150%] mb-2'>
					"Full stack developer, full stack problem solver"
				</p>
				<h4 className='md:hidden lg:block font-[700] text-[18px]'>Follow On Social Links:</h4>
				<div className='md:hidden lg:flex mt-2 flex justify-start gap-10'>
					<div className='text-5xl text-blue-600'>
						<Link
							href='https://twitter.com/junaidHKNiazi'
							target='_blank'>
							<FaTwitter />
						</Link>
					</div>
					<div className='text-5xl text-green-600'>
						<Link
							href='https://www.upwork.com/freelancers/junaidniazi'
							target='_blank'>
							<SiUpwork />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
