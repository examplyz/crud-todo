import {configureStore} from "@reduxjs/toolkit"
import todosSliceReducer from "../features/todos/todosSlice.js";
import {Provider} from "react-redux";
import {localStorageMiddleware} from "../middlewares/localStorageMiddleware.js";

const store = configureStore({
	reducer: {
		todos: todosSliceReducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(localStorageMiddleware)
	}
})

const StoreProvider = ({children}) => {
	return <Provider store={store}>
		{children}
	</Provider>
}

export default StoreProvider