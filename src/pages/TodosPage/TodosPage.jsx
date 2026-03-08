import React from "react";
import TodoList from "../../components/TodoList/TodoList.jsx";
import styles from "./TodosPage.module.scss"
import {useSelector} from "react-redux"
import {NavLink} from "react-router";

const TodosPage = () => {
	const todos = useSelector((state) => {
		return state.todos
	})
	
	return (
		<div className={styles.pageContainer}>
			{todos.length ? <TodoList todos={todos}/> :
				<div className={styles.notodos}><h2>You have no todos</h2><NavLink
					to={"/todos/new"}>Create
					todo</NavLink></div>}
		</div>
	);
};

export default TodosPage;