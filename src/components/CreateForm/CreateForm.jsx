import React, {useState} from "react";
import styles from "./CreateForm.module.scss"
import InputText from "../InputText/InputText.jsx";
import Button from "../Button/Button.jsx";
import InputDate from "../InputDate/InputDate.jsx";
import {useDispatch} from "react-redux";
import {todoAdded} from "../../features/todos/todosSlice.js";

const CreateForm = () => {
	const [title, setTitle] = useState("")
	const [text, setText] = useState("")
	const [date, setDate] = useState(0)
	const dispatch = useDispatch()
	const onSubmit = () => {
		dispatch(todoAdded({title, text, deadLine: date, id: Date.now()}))
	}
	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={(e) => e.preventDefault()}>
				<h3>ADD TODO</h3>
				<InputText placeholder={"Enter Todo title"} value={title}
				           onChange={(e) => setTitle(e.target.value)}/>
				<InputText placeholder={"Enter Todo text"} value={text}
				           onChange={(e) => setText(e.target.value)}/>
				<label>Deadline to:</label>
				<InputDate value={date}
				           onChange={(e) => setDate(e.target.value)}/>
				<Button color={"#0A2463"} onClick={onSubmit}>Create</Button>
			</form>
		</div>
	);
};

export default CreateForm;