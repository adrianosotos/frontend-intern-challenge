import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<p>uma seleção de produtos</p>
			<p>especial para você</p>
			<p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
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
