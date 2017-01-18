import React, {PropTypes} from 'react';

const Product = ({onProductClick, name, price})=>(
    <div className="product" onClick={onProductClick}>
        <h4>{name}</h4>
        <p>{price}</p>
    </div>
);

Product.propTypes = {
    onProductClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default Product;