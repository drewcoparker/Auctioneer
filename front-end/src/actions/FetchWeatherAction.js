import $ from 'jquery';

const key = `482c145ce8edf1d69ea5168f9d06460c`;
const weatherUrl = `api.openweathermap.org/data/2.5/weather?units=imperial&appid=${key}&zip=${zipCode}`;

export default function GetWeather(zipCode) {
    console.log('Action running!');
    const fullWeatherUrl = weatherUrl + zipCode;

    const thePromise = $.getJSON(fullWeatherUrl);
    console.log(thePromise);
    return {
        type: 'GET_WEATHER',
        payload: thePromise
    }
}
