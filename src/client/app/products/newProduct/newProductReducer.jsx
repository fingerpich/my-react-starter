export default (state , action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
        {
            //send state.product to server
            // return its promise to thunk;
        }
        
        default:
            return state;
    }
}