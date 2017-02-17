export default function(state = null, action){
	switch(action.type){
		case "SUBMIT_BID":
            console.log(action.payload);
			return action.payload;
		default:

	}
	return state;
}
