import PostsGrid from "./PostsGrid.js";
import PopularPostsGrid from "./PopularPostsGrid.js";

const featuredPost = ( props ) => {
	const { posts, popularPosts } = props
	return (
		<main className="flex justify-around xl:justify-center mx-auto p-20 gap-5">
			<div className='container flex xs:justify-center flex-col bg-greenGray mt-12 mb-14'>
				<h2 className="xs:text-2xl xs:mb-0 text-3xl font-bold mb-10 ml-8"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Featured</span> Posts</h2>
				<PostsGrid posts={posts} />
			</div>

			<div className='xs:hidden sm:hidden md:hidden xl:flex lg:flex flex-col mt-20 w-96 gap-5'>
				<h2 className="text-2xl font-bold mb-10"><span className='bg-greenSuper text-neutral-50 text-2xl p-1'>Popular</span> Posts</h2>
				<PopularPostsGrid posts={popularPosts} />
			</div>

		</main>
	);
};

export default featuredPost;
