import Layout from '../components/Layout.js';
import FeaturedPost from '../components/FeaturedPost.js';
import PostsSection from '../components/PostsSection.js';

const HomePage = () => {
	return (
		<>
			<Layout>
				<FeaturedPost />
				<PostsSection />
			</Layout>
		</>
	);
};

export default HomePage;
