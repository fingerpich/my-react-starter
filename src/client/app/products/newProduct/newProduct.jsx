import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from './../productsActionCreator.jsx';
import NewProductElement from './newProductElement.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
        // list: state.ProductsReducer
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddProduct: (product) => {
            dispatch(addProduct(product));
        }
    }
};

const NewProduct = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewProductElement);


export default NewProduct