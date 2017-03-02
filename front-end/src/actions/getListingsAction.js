
import $ from 'jquery';

export default function(category, token=null) {
    var url;
    var promise;
    if(category === "my-listings"){
        url = "http://localhost:3001/myListings";
        promise = $.ajax({
    		method: "POST",
    		url: url,
    		data: {token: token}
    	});
    }else{
        url = 'http://localhost:3001/getHomeAuctions/' + category;
        promise = $.getJSON(url);
    }

    return {
        type: 'GET_LISTINGS',
        payload: promise
    }
}
