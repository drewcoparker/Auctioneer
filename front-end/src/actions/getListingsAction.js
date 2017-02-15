
import $ from 'jquery';

export default function() {
    let promise = $.getJSON('http://localhost:3001/getHomeAuctions');
    return {
        type: 'GET_LISTINGS',
        payload: promise
    }
}
