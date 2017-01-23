import firebase from 'firebase';

/**
 * load products from firebase
 * @return {function} which will handle by thunk
 */
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

/**
 * add a product to firebase
 * @param {object} product contain its name and price
 * @return {function} which will handle by thunk
 */
export function addProduct(product) {
    return (dispatch, getState)=> {
        return firebase.database().ref('/products').push(product);
    };
    // dispatch({
    //     type:'ADD_PRODUCT',
    //     name:product.name,
    //     price:product.price,
    //     id: nextTodoId++
    // });
}

/**
 * remove a product from firebase
 * @param {object} product contain its key
 * @return {function} which will handle by thunk
 */
export function removeProduct(product) {
    return (dispatch, getState) => {
        return firebase.database().ref('/products').child(product.id).remove();
    };
    // dispatch({
    //     type:'REMOVE_PRODUCT',
    //     id:product.id,
    // });
}

/**
 * action creator for SHOW_PRODUCT
 * @param {object} product contain its key
 * @return {object} action
 */
export function showProduct(product) {
    return {type:'SHOW_PRODUCT',product};
}