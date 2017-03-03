import $ from 'jquery';
// import axios from 'axios';

export default function(token){
    console.log(token);
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3001/logout",
		data: {token: token}
	});
	return{
		type: "AUTH",
		payload: thePromise
	}
}
