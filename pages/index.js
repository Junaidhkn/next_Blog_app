import Layout from '../components/Layout.js';
import FeaturedPost from '../components/FeaturedPost.js';
import Header from '../components/Header.js';

const HomePage = () => {
	return (
		<>
			<Layout>
				<Header />
				<FeaturedPost />
			</Layout>
		</>
	);
};

export default HomePage;
