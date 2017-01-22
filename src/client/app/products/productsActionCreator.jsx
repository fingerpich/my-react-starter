import firebase from 'firebase';

export function fetchProduct() {
    return dispatch=> {
        return firebase.database().ref('/products').on('value', snap => {
            const products = Object.entries(snap.val()).map(([key, value])=>{
                value.id=key;
                return value;
            });
            dispatch({type: 'FETCH_PRODUCTS', products});
        });
    }
}

export function addProduct(product) {

    // dispatch({
    //     type:'ADD_PRODUCT',
    //     name:product.name,
    //     price:product.price,
    //     id: nextTodoId++
    // });

    return (dispatch, getState)=> {
        return firebase.database().ref('/products').push(product);

    }
}

export function removeProduct(product) {
    // dispatch({
    //     type:'REMOVE_PRODUCT',
    //     id:product.id,
    // });

    return (dispatch, getState) => {
        return firebase.database().ref('/products').child(product.key).remove();
        // dispatch({type:'REMOVE_PRODUCT',product});
    }
}

export function showProduct(product) {
    return {type:'SHOW_PRODUCT',product};
}