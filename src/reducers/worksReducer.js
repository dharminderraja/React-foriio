export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERWORKS':
            return action.payload;
        default:
            return state;
    }
}