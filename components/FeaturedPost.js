import React from 'react';

const featuredPost = () => {
	return (
		<div className=' bg-greenGray w-full'>
			<div className='container flex justify-around'>
				<div className='flex justify-center basis-9/12'>
					<h2>Featured Posts</h2>
					<div className='container '>
						<div></div>
						<div></div>
					</div>
				</div>
				<div className='line'></div>
				<div className='flex basis-3/12'>
					<h2>Popular all time</h2>
					<div className='container '>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default featuredPost;
