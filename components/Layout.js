import { Fragment } from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Layout = ( props ) => {
	return (
		<Fragment>
			<Navbar />
			{props.children}
			<Footer />
		</Fragment>
	);
};

export default Layout;
