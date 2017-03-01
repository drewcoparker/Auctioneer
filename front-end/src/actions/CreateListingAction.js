import $ from 'jquery';
// import axios from 'axios';

export default function(createListingData) {
    var formData = new FormData();
    formData.append('title', createListingData.title);
    formData.append('imgFile', createListingData.imgFile);
    formData.append('description', createListingData.description);
    formData.append('usd', createListingData.usd);
    formData.append('end', createListingData.end);
    formData.append('token', createListingData.token)
    formData.append('start', createListingData.start)

	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3001/createListing",
        processData: false,
        dataType: 'json',
        cache: false,
        data: formData,
        contentType: false
	});
	return{
		type: "CREATE_LISTING",
		payload: thePromise
	}
}
