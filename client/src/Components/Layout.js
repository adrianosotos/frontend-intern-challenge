import React, { useState } from 'react';
import Header from './Header';
import ShareForm from './ShareForm';
import Footer from './Footer';
import SideDrawer from '../Components/Sidedrawer/SideDrawer';
import Backdrop from '../Components/Backdrop';

const Layout = ({ children }) => {
	const [ sideDrawerOpen, setSideDrawerOpen ] = useState(false);

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen(!sideDrawerOpen);
	};
	const backdropClickHandler = () => {
		setSideDrawerOpen(false);
	};
	let backDrop;
	if (sideDrawerOpen) {
		backDrop = <Backdrop click={backdropClickHandler} />;
	}
	return (
		<div>
			<SideDrawer show={sideDrawerOpen} />
			{backDrop}
			<Header drawClickHandler={drawerToggleClickHandler} />
			{children}
			<ShareForm />
			<Footer />
		</div>
	);
};

export default Layout;
