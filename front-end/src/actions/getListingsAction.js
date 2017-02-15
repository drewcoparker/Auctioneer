import $ from 'jquery';

var getListingsAction = function() {
    let thePromise = $.getJSON('http://localhost:3001/getHomeAuctions');
    console.log('asdf');
    return {
        type: 'GET_LISTINGS',
        payload: thePromise
    }
}

export default getListingsAction;
