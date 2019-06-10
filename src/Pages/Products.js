import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import Layout from '../Components/Layout';
import ProductBox from '../Components/ProductBox';

const Products = () => {
	const [ products, setProducts ] = useState([]);
	const [ page, setPage ] = useState(1);
	const loadProduct = () => {
		setPage(page + 1);
	};
	useEffect(
		() => {
			fetch(`/products?pages=${page}`).then((response) => response.json()).then((contents) => {
				setProducts([ ...products, ...contents.products ]);
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
