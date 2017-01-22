import { connect } from 'react-redux'
import ProductsElement from './productsElement.jsx';
import {showProduct,removeProduct,fetchProduct} from './productsActionCreator.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.ProductsReducer
    }
};

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