import React from 'react';
import { Link } from 'react-router-dom';

const Help = ({ match }) => {
	return (
		<div>
			<h1>Ajude o algoritmo</h1>
			<Link to="/">Home Page</Link>
			{console.log(match.url)}
		</div>
	);
};

export default Help;
