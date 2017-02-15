

export default function GetListingsReducer (state = [], action) {
    switch(action.type) {
        case 'GET_LISTINGS':
            console.log('Get Listings reducer here, some action called "GET_LISTINGS"');
            return action.payload;
        default:
            console.log('default');
    }
    return state;
}
