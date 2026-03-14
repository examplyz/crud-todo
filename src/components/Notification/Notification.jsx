import React from "react";
import styles from "./Notification.module.scss"
import {RxCross1} from "react-icons/rx";
import {useDispatch} from "react-redux";
import {notificationDeleted} from "../../features/todos/notificationsSlice.js";

const Notification = ({notification}) => {
	const dispatch = useDispatch()
	const onDelete = () => {
		dispatch(notificationDeleted({id: notification.id}))
	}
	return (
		<div className={styles.notification}>
			<p>
				{notification.text}
			</p>
			<RxCross1 onClick={() => onDelete()}/>
		</div>
	);
};

export default Notification;