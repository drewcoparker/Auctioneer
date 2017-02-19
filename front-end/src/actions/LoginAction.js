import $ from 'jquery';
import axios from 'axios';

export default function(loginData){
	var thePromise = $.ajax({
		method: "POST",
		url: "http://localhost:3001/login",
		data: loginData
	});
	return{
		type: "LOGIN",
		payload: thePromise
	}
}
