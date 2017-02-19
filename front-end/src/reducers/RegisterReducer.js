export default function(state = [], action){
	switch(action.type){
		case "REGISTER":
			return action.payload;
		default:
			return state;
	}
}
