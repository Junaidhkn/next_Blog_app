import Image from "next/image.js";
import Link from "next/link.js";
import PostsGrid from "./PostsGrid.js";
import PopularPostsGrid from "./PopularPostsGrid.js";

const featuredPost = ( props ) => {
	const { posts, popularPosts } = props
	return (
		<main className="flex ">
			<div className='container flex flex-col bg-greenGray w-full mt-12 mb-14 mx-20'>
				<h2 className="text-3xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Featured</span> Posts</h2>
				<PostsGrid posts={posts} />
			</div>
			{/* {hover:outline-1 hover:drop-shadow-xl hover:outline-emerald-100} */}
			{/* Popular Posts */}

			<div className='flex flex-col mt-20 w-96 mr-20 gap-5'>
				<h2 className="text-2xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Popular</span> Posts</h2>
				<PopularPostsGrid posts={popularPosts} />
			</div>

		</main>
	);
};

export default featuredPost;
