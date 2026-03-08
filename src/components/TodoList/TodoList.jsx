import React from "react";
import styles from "./TodoList.module.scss"
import Todo from "../Todo/Todo.jsx";

const TodoList = ({todos}) => {
	return (
		<div className={styles.todoContainer}>
			{todos.map(todo => {
				return <Todo isCompleted={todo.isCompleted} deadLine={todo.deadLine}
				             id={todo.id} key={todo.id}
				             text={todo.text}
				             title={todo.title}/>
			})}
		</div>
	);
};

export default TodoList;