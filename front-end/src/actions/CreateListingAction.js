import $ from 'jquery';
// import axios from 'axios';

export default function(createListingData) {
    var formData = new FormData();
    formData.append('title', 'asdf');
    formData.append('imgFile', createListingData.imgFile);
    formData.append('description', createListingData.description);
    formData.append('usd', createListingData.usd);
    formData.append('utc', createListingData.utc);

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
