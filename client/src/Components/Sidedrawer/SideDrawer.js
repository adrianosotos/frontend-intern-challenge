import React from 'react';
import { Link } from 'react-router-dom';

const SideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<nav className={drawerClasses}>
			<ul>
				<li>
					<a
						href="https://www.linx.com.br/transformacao-digital/linx-impulse/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Conheça a Linx
					</a>
				</li>
				<li>
					<Link to="/Help">Ajude o algoritmo</Link>
				</li>
				<li>
					<Link to="/products">Seus produtos</Link>
				</li>
				<li>
					<a href="/#share">Compartilhe</a>
				</li>
			</ul>
		</nav>
	);
};

export default SideDrawer;
