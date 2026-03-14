import {createSlice} from "@reduxjs/toolkit"

const loadTodos = () => {
	try {
		const todos = localStorage.getItem("todos")
		return todos ? JSON.parse(todos) : []
	} catch (e) {
		alert(e)
		return []
	}
}
const todosSlice = createSlice({
	name: "todos",
	initialState: loadTodos(),
	reducers: {
		todoAdded(state, action) {
			state.push({
				id: action.payload.id,
				text: action.payload.text,
				title: action.payload.title,
				deadLine: action.payload.deadLine,
				isCompleted: false,
			})
		},
		todoToggled(state, action) {
			const todo = state.find((todo) => todo.id === action.payload)
			todo.isCompleted = !todo.isCompleted
		},
		todoDeleted(state, action) {
			return state.filter(todo => todo.id !== action.payload)
		},
		todoEdited(state, action) {
			const index = state.findIndex(todo => todo.id === action.payload.id)
			
			if (index !== -1) {
				state[index] = action.payload
			}
		}
	},
})

export const {
	todoAdded,
	todoToggled,
	todoDeleted,
	todoEdited
} = todosSlice.actions
export default todosSlice.reducer