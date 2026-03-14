import React from "react";
import styles from "./Form.module.scss"
import InputText from "../InputText/InputText.jsx";
import Button from "../Button/Button.jsx";
import InputDate from "../InputDate/InputDate.jsx";
import {useDispatch} from "react-redux";
import {todoAdded, todoEdited} from "../../features/todos/todosSlice.js";
import useUpdateTodo from "../../shared/hooks/useUpdateTodo.js";

const Form = ({type, id}) => {
	const dispatch = useDispatch()
	const identificator = id ? id : Date.now()
	const {
		onSubmit,
		todo,
		setTodo
	} = useUpdateTodo(identificator, type === "create" ? todoAdded : todoEdited, dispatch)
	return (
		<div className={styles.container}>
			<form className={styles.form}
			      onSubmit={(e) => type == "create" ? null : e.preventDefault()}>
				<h3>{type == "edit" ? "EDIT" : type == "create" && "ADD"} TODO</h3>
				<InputText placeholder={"Enter Todo title"} value={todo.title}
				           onChange={(e) => setTodo.setTitle(e.target.value)}/>
				<InputText placeholder={"Enter Todo text"} value={todo.text}
				           onChange={(e) => setTodo.setText(e.target.value)}/>
				<label>Deadline to:</label>
				<InputDate value={todo.deadLine}
				           onChange={(e) => setTodo.setDeadLine(e.target.value)}/>
				<Button color={"#0A2463"}
				        onClick={onSubmit}>{type == "create" ? "Create" : "Edit"}</Button>
			</form>
		</div>
	);
};

export default Form;