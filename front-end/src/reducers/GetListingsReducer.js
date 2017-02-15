export default function (state = [], action) {
    console.log(action.type);
    switch (action.type) {
        case "GET_LISTINGS":
            console.log('Get Listings reducer here, some action called "GET_LISTINGS"');
            break;
        default:

    }
    return state;
}
