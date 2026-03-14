import React from "react";
import styles from "./Notifications.module.scss"
import {useSelector} from "react-redux";
import Notification from "../Notification/Notification.jsx"

const Notifications = () => {
	const notifications = useSelector(state => state.notifications)
	
	return (
		<div className={styles.notifications}>
			{notifications.map(notification => <Notification key={notification.id}
			                                                 notification={notification}/>)}
		</div>
	);
};

export default Notifications;