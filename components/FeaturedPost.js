import Image from "next/image.js";

const featuredPost = () => {
	return (
		<main className='container flex bg-greenGray w-full justify-around mt-12 mx-36'>
			<div className="flex justify-between w-4/6">
				<div className='flex flex-col'>
					<h2 className="text-3xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Featured</span> Posts</h2>
					<div className='container mt-8'>
						<div>
							<span className="p-1 bg-greenFooter text-xs">React.js</span>
							<h3 className="text-3xl font-[600] leading-[37.5px] text-[27px]">I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
							<div className="m-2 flex space-x-7 text-sm font-thin">
								{/* Add Icons */}
								<p>Junaid Hassan Khan</p>
								<p>27/12/2022</p>
							</div>
							<p className="leading-[22.5px] text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa eligendi eos doloribus eius, obcaecati sed, voluptates culpa vel similique. Quos odit sit et nostrum asperiores? Alias aliquid nemo incidunt...</p>
						</div>
					</div>
				</div>
				<div className=" w-96">
					<div className="absolute w-[194px] h-[271px] left-[453px] top-[230px] bg-greenNav"></div>
					<img className="object-cover" src="/images/blog.jpg" />
					{/* <Image></Image> */}
				</div>
			</div>

			<div className='line mx-10'></div>

			<div className='flex flex-col w-2/6'>
				<div>
					<h2>Popular all time</h2>
					<div className='container '>
						<div>
							<span>React.js</span>
							<h3>I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
							<div>
								<p>Name</p>
								<p>Date</p>
							</div>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa eligendi eos doloribus eius, obcaecati sed, voluptates culpa vel similique. Quos odit sit et nostrum asperiores? Alias aliquid nemo incidunt...</p>
						</div>
					</div>
					<div className='container '>
						<div>
							<span>React.js</span>
							<h3>I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
							<div>
								<p>Name</p>
								<p>Date</p>
							</div>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa eligendi eos doloribus eius, obcaecati sed, voluptates culpa vel similique. Quos odit sit et nostrum asperiores? Alias aliquid nemo incidunt...</p>
						</div>
					</div>
				</div>

			</div>

		</main>
	);
};

export default featuredPost;
