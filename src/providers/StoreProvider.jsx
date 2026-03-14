import {configureStore} from "@reduxjs/toolkit"
import todosSliceReducer from "../features/todos/todosSlice.js";
import {Provider} from "react-redux";
import {localStorageMiddleware} from "../middlewares/localStorageMiddleware.js";
import notificationsSlice from "../features/todos/notificationsSlice.js";
import listenerMiddleware from "../middlewares/notificationsMiddleware.js";

const store = configureStore({
	reducer: {
		todos: todosSliceReducer,
		notifications: notificationsSlice
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(localStorageMiddleware).concat(listenerMiddleware.middleware)
	}
})

const StoreProvider = ({children}) => {
	return <Provider store={store}>
		{children}
	</Provider>
}

export default StoreProvider