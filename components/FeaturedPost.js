import Image from "next/image.js";
import Link from "next/link.js";
import PostsGrid from "./PostsGrid.js";

const featuredPost = ( props ) => {
	return (
		<main className="flex ">
			<div className='container flex flex-col bg-greenGray w-full mt-12 mb-14 mx-20'>
				<h2 className="text-3xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Featured</span> Posts</h2>
				<PostsGrid posts={props.posts} />
			</div>
			{/* {hover:outline-1 hover:drop-shadow-xl hover:outline-emerald-100} */}
			{/* Popular Posts */}

			<div className='flex flex-col mt-20 w-96 mr-20 gap-5'>
				<h2 className="text-2xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Popular</span> Posts</h2>
				<Link href='/' className="hover:outline outline-2 outline-emerald-100  hover:drop-shadow-md">
					<div className="p-5 ">
						<div className='container mt-8'>
							<div className=" w-[430]">
								<span className="p-1 bg-greenFooter text-xs">React.js</span>
								<h3 className="mt-1 font-[600] leading-[150%] text-[17px]">I have create a React Booking App.Here's what I have Learnt from it.Check it out'</h3>
								<div className="m-2 flex space-x-7 text-xs font-thin">
									{/* Add Icons */}
									<p>Junaid Khan</p>
									<p>27/12/2022</p>
								</div>
								<p className="leading-[22.5px] text-[15px] w-[430]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo non consequatur error ipsa el...</p>
							</div>
						</div>
					</div>

				</Link>
			</div>

		</main>
	);
};

export default featuredPost;
