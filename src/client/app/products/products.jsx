import { connect } from 'react-redux'
import ProductsElement from './productsElement.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        list: state.ProductsReducer
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onProductClick: (product) => {
            dispatch({type:'SHOW_PRODUCT',product});
        },
    }
};

const Products = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsElement);

export default Products;