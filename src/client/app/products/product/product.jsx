import React, {PropTypes} from 'react';

const Product = ({onProductClick, onRemoveClick, name, price})=>(
    <div className="product" >
        <div onClick={onProductClick}>
            <h4>{name}</h4>
            <p>{price}</p>
        </div>
        <div>
            <a onClick={onRemoveClick}>remove</a>
        </div>
    </div>
);

Product.propTypes = {
    onProductClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
};

export default Product;