import React from 'react';

const ProductBox = ({ product }) => {
	return (
		<div className="product-box">
			<div className="product-box__img-container">
				<img src={product.image} alt="product" />
			</div>

			<p className="product-box__title">{product.name}</p>
			<p className="product-box__description">{product.description}</p>
			<p className="product-box__old-price">
				De: R${Number(product.oldPrice).toFixed(2).toString().replace('.', ',')}
			</p>
			<p className="product-box__new-price">
				Por: R${Number(product.price).toFixed(2).toString().replace('.', ',')}
			</p>
			<p className="product-box__instalments">
				ou {product.installments.count}x de R${Number(product.installments.value)
					.toFixed(2)
					.toString()
					.replace('.', ',')}
			</p>
			<button className="product-box__buy-button">Comprar</button>
		</div>
	);
};

export default ProductBox;
