import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './Sidedrawer/DrawerToggleButton';
const Header = ({ drawClickHandler }) => {
	return (
		<header>
			<div className="navbar__toggle-button">
				<DrawerToggleButton click={drawClickHandler} />
			</div>
			<div className="header__top-section">
				<p>uma seleção de produtos</p>
				<p>especial para você</p>
				<p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
			</div>
			<nav className="navbar">
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
					<li className="navbar__toggle-button">
						<DrawerToggleButton click={drawClickHandler} />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
