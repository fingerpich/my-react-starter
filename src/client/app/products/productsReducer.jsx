export default (productsState = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':return addProduct(productsState,action);
        case 'REMOVE_PRODUCT':return removeProduct(productsState,action);
        case 'EDIT_PRODUCT':return editProduct(productsState,action);
        case 'CLICK_PRODUCT':return clickProduct(productsState,action);
        case 'FETCH_PRODUCTS':return fetchProducts(productsState,action);
        default: return productsState;
    }
}


/**
 * present list of products
 * @param {object} productsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function fetchProducts(productsState, action){
    return [...action.products];
}


/**
 * present list of products
 * @param {object} productsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function addProduct(productsState, action){
    const newProducts = productsState.concat({
        id: action.id,
        name: action.name,
        price: action.price
    });

    return newProducts;
}


/**
 * present list of products
 * @param {object} productsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function editProduct(productsState, action){
    const newProducts=[...productsState];//clone products
    newProducts[productsState.findIndex(p => p.id==action.id)]={
        id: action.id,
        name: action.name,
        price: action.price
    };

    return newProducts;
}


/**
 * present list of products
 * @param {object} productsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function removeProduct(productsState, action){
    const newProducts=productsState.slice();//clone products
    newProducts.splice(productsState.findIndex(p => p.id==action.id), 1);//remove matched product

    return newProducts;
}


/**
 * present list of products
 * @param {object} productsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function clickProduct(productsState, action){
    alert(action.product.id);
    return productsState;
}