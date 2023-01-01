import FeaturedPost from '../components/FeaturedPost.js';
import Header from '../components/Header.js';
import { getFeaturedPosts, getPopularPosts } from '../helper/utils.js';

const HomePage = ( props ) => {
	const { featuredPosts, popularPosts } = props.posts
	return (
		<>
			<Header />
			<FeaturedPost posts={featuredPosts} popularPosts={popularPosts} />
		</>
	);
};

export default HomePage;



export function getStaticProps () {
	const featuredPosts = getFeaturedPosts();
	const popularPosts = getPopularPosts()

	return {
		props: {
			posts:
			{
				featuredPosts,
				popularPosts
			}
		},
	};
}