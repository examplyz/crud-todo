export const localStorageMiddleware = store => next => action => {
	const result = next(action);
	const state = store.getState();
	if (action.type.startsWith("todo")) {
		try {
			localStorage.setItem("todos", JSON.stringify(state.todos));
		} catch (e) {
			console.error("LocalStorage error", e);
		}
	}
	
	
	return result;
};