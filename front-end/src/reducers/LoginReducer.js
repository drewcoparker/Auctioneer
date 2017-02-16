export default function(state = [], action){
	switch(action.type){
		case "LOGIN":
			return action.payload;
		default:

	}
	return state;
}
