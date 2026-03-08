import React, {useState} from "react";
import styles from "./Todo.module.scss"
import Button from "../Button/Button.jsx";
import {FaCheck} from "react-icons/fa6";
import {ImCross} from "react-icons/im";
import {GrEdit} from "react-icons/gr";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import getTodayDate from "../../shared/utils/getDate.js";
import {todoDeleted, todoToggled} from "../../features/todos/todosSlice.js";
import Modal from "../Modal/Modal.jsx";

const Todo = ({title, text, isCompleted, id, deadLine}) => {
	const [active, setActive] = useState(false)
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const dispatchToggle = () => dispatch(todoToggled(id))
	const dispatchDelete = () => dispatch(todoDeleted(id))
	return (<>
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
						className={styles.due + (getTodayDate() >= deadLine && !isCompleted ? ` ${styles.expired}` : ` ${styles.notExpired}`)}>
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
					<Button color={"#FB3640"} onClick={() => setActive(true)}>
						DELETE
					</Button>
				</div>
			</div>
			<Modal active={active} setActive={() => setActive(!active)}>
				{active && <div className={styles.modal}>
					<p>Are you sure you want to delete this todo ?</p>
					<div className={styles.btns}>
						<Button color={"#058c42"} onClick={dispatchDelete}>Yes</Button>
						<Button color={"#FB3640"}
						        onClick={() => setActive(false)}>Cancel</Button>
					</div>
				</div>}
			</Modal>
		</>
	);
};

export default Todo;