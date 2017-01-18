import React, {PropTypes} from 'react';
import Product from './product/product.jsx';
import NewProduct from './newProduct/newProduct.jsx';

const ProductListElement = ({ list, onProductClick }) => (
    <div>
        <NewProduct/>
        <ul>
            {list.map(product =>
                <li key={product.id}>
                    <Product
                            {...product}
                             onProductClick={() => onProductClick(product)} />
                </li>
            )}
        </ul>
    </div>
);

ProductListElement.propTypes = {
    list:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        price:PropTypes.string.isRequired
    }).isRequired).isRequired,
    onProductClick:PropTypes.func.isRequired
};

export default ProductListElement;