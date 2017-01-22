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

function fetchProducts(productsState, action){
    return [...action.products];
}

function addProduct(productsState, action){
    const newProducts = productsState.concat({
        id: action.id,
        name: action.name,
        price: action.price
    });

    return newProducts;
}

function editProduct(productsState, action){
    const newProducts=[...productsState];//clone products
    newProducts[productsState.findIndex(p => p.id==action.id)]={
        id: action.id,
        name: action.name,
        price: action.price
    };

    return newProducts;
}

function removeProduct(productsState, action){
    const newProducts=productsState.slice();//clone products
    newProducts.splice(productsState.findIndex(p => p.id==action.id), 1);//remove matched product

    return newProducts;
}

function clickProduct(productsState, action){
    alert(action.product.id);
    return productsState;
}