import $ from 'jquery';
// import axios from 'axios';

export default function(token){
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3001/logout",
		data: token
	});
	return{
		type: "AUTH",
		payload: thePromise
	}
}
