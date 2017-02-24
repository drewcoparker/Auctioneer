export default function(state = null, action){
	switch(action.type){
		case "CREATE_LISTING":
			return action.payload;
		default:
			return state;
	}
}
