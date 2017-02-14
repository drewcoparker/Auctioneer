import { combineReducers } from 'redux';
import MovieReducer from './MovieReducer';
import WeatherReducer from './WeatherReducer';

const masterReducer = combineReducers({
    weather: WeatherReducer,
    movie: MovieReducer
});

export default masterReducer;
