import React from 'react';
import Header from './Header';
import ShareForm from './ShareForm';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<ShareForm />
			<Footer />
		</div>
	);
};

export default Layout;
