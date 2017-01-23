import React, {PropTypes} from 'react';
import Product from './product/product.jsx';
import NewProduct from './newProduct/newProduct.jsx';

/**
 * present list of products
 * @param {array} list contain products
 * @param {function} onProductClick event callback
 * @param {function} onRemoveClick event callback
 * @return {object} presentation element
 */
const ProductListElement = ({ list, onProductClick, onRemoveClick }) => (
    <div>
        <NewProduct/>
        <ul>
            {list.map(product =>
                <li key={product.id}>
                    <Product
                            {...product}
                             onRemoveClick={() => onRemoveClick(product)}
                             onProductClick={() => onProductClick(product)} />
                </li>
            )}
        </ul>
    </div>
);

ProductListElement.propTypes = {
    list:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        price:PropTypes.string.isRequired
    }).isRequired).isRequired,
    onProductClick:PropTypes.func.isRequired
};

export default ProductListElement;