import Image from "next/image.js";

const featuredPost = () => {
	return (
		<main className='container flex bg-greenGray w-full justify-around'>

			<div className='flex justify-center grow'>
				<h2>Featured Posts</h2>
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
					<div>
						<div></div>
						<Image></Image>
					</div>
				</div>
			</div>

			<div className='line'></div>

			<div className='flex flex-col'>
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
