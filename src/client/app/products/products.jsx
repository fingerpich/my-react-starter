import { connect } from 'react-redux'
import ProductsElement from './productsElement.jsx';
import {showProduct,removeProduct,fetchProduct} from './productsActionCreator.jsx';

/**
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
    return {
        list: state.ProductsReducer
    }
};

/**
 * @param {object} dispatch to run a reducer 
 * @param {object} ownProps associated property in parent component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onProductClick: (product) => {
            dispatch(showProduct(product));
        },
        onRemoveClick: (product) => {
            dispatch(removeProduct(product));
        }
    }
};


const Products = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsElement);

export default Products;