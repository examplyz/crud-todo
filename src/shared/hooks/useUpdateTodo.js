import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {notificationAdded} from "../../features/todos/notificationsSlice.js";

function useUpdateTodo(id, action, dispatch) {
	const todos = useSelector((state) => {
		return state.todos
	})
	
	const [title, setTitle] = useState("")
	const [text, setText] = useState("")
	const [deadLine, setDeadLine] = useState(0)
	const [isCompleted, setIsCompleted] = useState(false)
	
	useEffect(() => {
		if (id) {
			const todo = todos.find(todo => todo.id === id)
			if (todo) {
				setText(todo.text)
				setTitle(todo.title)
				setDeadLine(todo.deadLine)
				setIsCompleted(todo.isCompleted)
			}
		}
	}, [])
	
	const onSubmit = useCallback(() => {
		dispatch(action({title, text, deadLine, isCompleted, id}))
		dispatch(notificationAdded({
			id: Date.now(),
			text: "Todo is succesfully updated"
		}))
	}, [title, text, deadLine, isCompleted, id, dispatch, action])
	return {
		onSubmit,
		todo: {
			text, title, deadLine, isCompleted
		}, setTodo: {setText, setTitle, setDeadLine, setIsCompleted}
	}
}

export default useUpdateTodo