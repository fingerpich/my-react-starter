import React, {PropTypes} from 'react';

let nameInput;
let priceInput;
const NewProductElement = ({ onAddProduct}) => (
    <div>
        <form onSubmit={e => {
                e.preventDefault();
                if (!nameInput.value.trim()) {
                    return
                }
                onAddProduct({name:nameInput.value,price:priceInput.value});
                
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
);

NewProductElement.propTypes = {
    onAddProduct:PropTypes.func.isRequired
};

export default NewProductElement;