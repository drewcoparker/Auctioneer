

export default function GetListingsReducer (state = [], action) {
    switch(action.type) {
        case 'GET_LISTINGS':
            return action.payload;
        default:
    }
    return state;
}
