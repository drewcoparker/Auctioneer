export default function (state=[], action) {

    switch(action.type) {
        case "getWeather":
        console.log(action.payload);
        return (action.payload);
    }
    return state;
}
