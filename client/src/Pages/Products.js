import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import Layout from '../Components/Layout';
import ProductBox from '../Components/ProductBox';

const Products = () => {
	const [ products, setProducts ] = useState([]);
	const [ page, setPage ] = useState('frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');
	const [ nextPage, setNextPage ] = useState('');
	const loadProduct = () => {
		setPage(nextPage);
		console.log(nextPage);
	};
	useEffect(
		() => {
			fetch(`api/products?pages=${page}`).then((response) => response.json()).then((contents) => {
				setProducts([ ...products, ...contents.products ]);
				setNextPage(contents.nextPage);
			});
		},
		[ page ]
	);
	return (
		<Layout>
			<h1>Sua seleção especial</h1>
			{products.map((product) => <ProductBox key={product.id} product={product} />)}
			<button onClick={loadProduct}>Ainda mais produtos aqui</button>
		</Layout>
	);
};

export default Products;
