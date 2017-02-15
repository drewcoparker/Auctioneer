var GetListingsReducer = function (state = [], action) {
    console.log(action.type);
    switch(action.type) {
        case 'GET_LISTINGS':
            console.log('Get Listings reducer here, some action called "GET_LISTINGS"');
            return action.payload;
        default:

    }
    return state;
}

export default GetListingsReducer;
