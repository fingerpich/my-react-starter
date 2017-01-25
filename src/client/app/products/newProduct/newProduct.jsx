import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from './../productsActionCreator.jsx';
import NewProductElement from './newProductElement.jsx';

/**
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
    return {
    }
};

/**
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
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