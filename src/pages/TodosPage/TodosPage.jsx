import React from "react";
import TodoList from "../../components/TodoList/TodoList.jsx";
import styles from "./TodosPage.module.scss"
import {useSelector} from "react-redux"

const TodosPage = () => {
	const todos = useSelector((state) => {
		return state.todos
	})
	
	return (
		<div className={styles.pageContainer}>
			{todos && <TodoList todos={todos}/>}
		</div>
	);
};

export default TodosPage;