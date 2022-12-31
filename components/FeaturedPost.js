import PostsGrid from "./PostsGrid.js";
import PopularPostsGrid from "./PopularPostsGrid.js";

const featuredPost = ( props ) => {
	const { posts, popularPosts } = props
	console.log( 'first' )
	console.log( posts );
	return (
		<main className="flex justify-around p-20 gap-5">
			<div className='container flex flex-col bg-greenGray mt-12 mb-14'>
				<h2 className="text-3xl font-bold mb-10 ml-8"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Featured</span> Posts</h2>
				<PostsGrid posts={posts} />
			</div>
			{/* {hover:outline-1 hover:drop-shadow-xl hover:outline-emerald-100} */}
			{/* Popular Posts */}

			<div className='flex flex-col mt-20 w-96 mr-30 gap-5'>
				<h2 className="text-2xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Popular</span> Posts</h2>
				<PopularPostsGrid posts={popularPosts} />
			</div>

		</main>
	);
};

export default featuredPost;
