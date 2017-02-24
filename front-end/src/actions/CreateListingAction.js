import $ from 'jquery';
// import axios from 'axios';

export default function(createListingData){
    console.log(createListingData);
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3001/createListing",
		data: createListingData,
        processData: false,
        contentType: false
	});
	return{
		type: "CREATE_LISING",
		payload: thePromise
	}
}
