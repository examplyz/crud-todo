import {createListenerMiddleware} from "@reduxjs/toolkit";
import {
	notificationAdded,
	notificationDeleted
} from "../features/todos/notificationsSlice.js";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
	actionCreator: notificationAdded,
	effect: async (action, listenerApi) => {
		
		const id = action.payload.id;
		
		await new Promise(resolve => setTimeout(resolve, 3000));
		
		listenerApi.dispatch(notificationDeleted({id}));
	}
});

export default listenerMiddleware