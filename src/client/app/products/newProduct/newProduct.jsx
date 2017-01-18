import React from 'react'
import { connect } from 'react-redux'

let NewProductElement = ({ dispatch }) => {
    let nameInput;
    let priceInput;
    let nextTodoId=0;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!nameInput.value.trim()) {
                    return
                }

                dispatch({
                    type: 'ADD_PRODUCT',
                    name:nameInput.value,
                    price:priceInput.value,
                    id: nextTodoId++
                });
                nameInput.value = '';
                priceInput.value = '';
            }}>
                <input ref={node => {
                    nameInput = node
                }} />
                <input ref={node => {
                    priceInput = node
                }} />
                <button type="submit">
                    Add product
                </button>
            </form>
        </div>
    )
};

const NewProduct = connect()(NewProductElement);

export default NewProduct