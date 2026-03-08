import React from "react";
import styles from "./Todo.module.scss"
import Button from "../Button/Button.jsx";
import {FaCheck} from "react-icons/fa6";
import {ImCross} from "react-icons/im";
import {GrEdit} from "react-icons/gr";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import getTodayDate from "../../shared/utils/getDate.js";
import {todoDeleted, todoToggled} from "../../features/todos/todosSlice.js";

const Todo = ({title, text, isCompleted, id, deadLine}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const dispatchToggle = () => dispatch(todoToggled(id))
	return (
		<div
			className={`${styles.todo}  ${(isCompleted ? styles.complited : styles.incomplited)}`}>
			<div className={styles.info}>
				<h3 className={styles.title}>
					{title}
				</h3>
				<p className={styles.text}>
					{text}
				</p>
				<p
					className={styles.due + (getTodayDate() >= deadLine && ` ${styles.expired}`)}>
					Due to date: {deadLine}
				</p>
			</div>
			<div className={styles.buttonBar}>
				{isCompleted ? (
					<Button color={"#FB3640"} onClick={dispatchToggle}>
						<ImCross/>
					</Button>
				) : (<Button color={"#058c42"} onClick={dispatchToggle}>
					<FaCheck/>
				</Button>)}
				<Button color={"#0A2463"}
				        onClick={() => navigate(`/todos/${id}/edit`)}>
					<GrEdit/>
				</Button>
				<Button color={"#FB3640"} onClick={() => dispatch(todoDeleted(id))}>
					DELETE
				</Button>
			</div>
		</div>
	);
};

export default Todo;