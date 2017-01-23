export default (state = 1, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            return action.count;
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}