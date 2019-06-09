import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';

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
		<div>
			{products.map((product) => <p>{product.name}</p>)}
			<button onClick={loadProduct}>Load More</button>
		</div>
	);
};

export default Products;
