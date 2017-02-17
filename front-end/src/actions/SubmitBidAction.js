import $ from 'jquery';

export default function(bidAmount, listingId, userToken) {
    var bidInfo = {
        bidAmount: bidAmount,
        listingId: listingId,
        userToken: userToken
    }
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3001/submitBid",
		data: bidInfo
	});
	return{
		type: "SUBMIT_BID",
		payload: thePromise
	}
}
