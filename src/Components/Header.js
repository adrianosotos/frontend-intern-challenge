import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
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
					<a href="/products/#share">Compartilhe</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;
