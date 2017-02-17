import $ from 'jquery';

export default function(listingId) {
    let promise = $.getJSON(`http://localhost:3001/getListingItem/${listingId}`);
    return {
        type: 'GET_LISTING_ID',
        payload: promise
    }
}
