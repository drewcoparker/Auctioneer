export default function(state = null, action){
	switch(action.type){
		case "AUTH":
			return action.payload;
		default:
			return state;
	}
}
