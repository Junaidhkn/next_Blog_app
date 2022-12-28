import Image from "next/image.js";

const featuredPost = () => {
	return (
		<main className="flex ">
			<div className='container flex flex-col bg-greenGray w-full mt-12 mx-20'>
				<h2 className="text-3xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Featured</span> Posts</h2>
				<div className="flex justify-evenly gap-8 mb-10 pb-10 hover:drop-shadow-xl hover:border-x-emerald-100 hover:border-2">
					<div className='flex flex-col w-96 h-64'>
						<div className='container mt-8'>
							<div className=" w-[430]">
								<span className="p-1 bg-greenFooter text-xs">React.js</span>
								<h3 className="mt-1  text-3xl font-[600] leading-[37.5px] text-[27px]">I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
								<div className="m-2 flex space-x-7 text-sm font-thin">
									{/* Add Icons */}
									<p>Junaid Hassan Khan</p>
									<p>27/12/2022</p>
								</div>
								<p className="leading-[22.5px] text-[15px] w-[430]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa eligendi eos doloribus eius, obcaecati sed, voluptates culpa vel similique. Quos odit sit et nostrum asperiores? Alias aliquid nemo incidunt...</p>
							</div>
						</div>
					</div>
					<div className="relative w-[350px] h-[250px] mt-20">
						<div className="absolute w-[150px] h-[171px] -left-[20px] -top-[20px] z-0 opacity-80 bg-greenNav"></div>
						<img className="absolute w-full h-full z-10" src="/images/blog.jpg" />
						{/* <Image></Image> */}
					</div>
				</div>
				<div className="flex justify-evenly gap-8 mb-10 pb-10 hover:drop-shadow-xl hover:border-x-emerald-100 hover:border-2">
					<div className='flex flex-col w-96 h-64 '>
						<div className='container mt-8'>
							<div className=" w-[430]">
								<span className="p-1 bg-greenFooter text-xs">React.js</span>
								<h3 className="mt-1 text-3xl font-[600] leading-[37.5px] text-[27px]">I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
								<div className="m-2 flex space-x-7 text-sm font-thin">
									{/* Add Icons */}
									<p>Junaid Hassan Khan</p>
									<p>27/12/2022</p>
								</div>
								<p className="leading-[22.5px] text-[15px] w-[430]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa eligendi eos doloribus eius, obcaecati sed, voluptates culpa vel similique. Quos odit sit et nostrum asperiores? Alias aliquid nemo incidunt...</p>
							</div>
						</div>
					</div>
					<div className="relative w-[350px] h-[250px] mt-32">
						<div className="absolute w-[150px] h-[171px] -left-[20px] -top-[20px] z-0 opacity-80 bg-greenNav"></div>
						<img className="absolute w-full h-full z-10" src="/images/blog.jpg" />
						{/* <Image></Image> */}
					</div>
				</div>
			</div>

			{/* Popular Posts */}

			<div className='flex flex-col mt-20 w-96 mr-20 gap-5'>
				<h2 className="text-2xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Popular</span> Posts</h2>
				<div className="p-5 hover:drop-shadow-xl hover:border-x-emerald-100 hover:border-2">
					<div className='container mt-8'>
						<div className=" w-[430]">
							<span className="p-1 bg-greenFooter text-xs">React.js</span>
							<h3 className="mt-1 font-[600] leading-[150%] text-[17px]">I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
							<div className="m-2 flex space-x-7 text-xs font-thin">
								{/* Add Icons */}
								<p>Junaid Hassan Khan</p>
								<p>27/12/2022</p>
							</div>
							<p className="leading-[22.5px] text-[15px] w-[430]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa el...</p>
						</div>
					</div>
				</div>
				<div className="p-5 hover:drop-shadow-xl hover:border-x-emerald-100 hover:border-2">
					<div className='container mt-8'>
						<div className=" w-[430]">
							<span className="p-1 bg-greenFooter text-xs">React.js</span>
							<h3 className="mt-1 font-[600] leading-[150%] text-[17px]">I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
							<div className="m-2 flex space-x-7 text-xs font-thin">
								{/* Add Icons */}
								<p>Junaid Hassan Khan</p>
								<p>27/12/2022</p>
							</div>
							<p className="leading-[22.5px] text-[15px] w-[430]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa el...</p>
						</div>
					</div>
				</div>
			</div>

		</main>
	);
};

export default featuredPost;
