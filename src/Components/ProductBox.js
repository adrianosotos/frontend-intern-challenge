import React from 'react';

const ProductBox = ({ product }) => {
	return (
		<div>
			<img src={product.image} alt="product" />
			<p>{product.name}</p>
			<p>{product.description}</p>
			<p>De: {product.oldPrice}</p>
			<p>Por: {product.price}</p>
			<p>
				ou {product.installments.count}x de {product.installments.value}
			</p>
		</div>
	);
};

export default ProductBox;
