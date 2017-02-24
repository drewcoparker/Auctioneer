import $ from 'jquery';
// import axios from 'axios';

export default function(createListingData) {
    console.log(createListingData);
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3001/createListing",
        processData: false,
        data: createListingData,
        // contentType: false
	});
	return{
		type: "CREATE_LISTING",
		payload: thePromise
	}
}
