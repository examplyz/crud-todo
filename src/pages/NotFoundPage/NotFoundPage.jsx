import React, {useEffect, useState} from "react";
import styles from "./NotFoundPage.module.scss"
import {NavLink} from "react-router";
import robot_img from "../../shared/images/robot_img.png"

const NotFoundPage = () => {
	const [counter, setCounter] = useState(20)
	useEffect(() => {
		const interval = setInterval(() => setCounter(counter - 1), 1000)
		return (() => {
			clearInterval(interval)
		})
	}, [counter])
	return (
		<div className={styles.container}>
			<img src={robot_img} alt="Robot"/>
			<h2 className={styles.heading}>The page is not found</h2>
			<p>
				You will be redirected to the
				<NavLink to={"/todos"}> main page </NavLink> in {counter} seconds....
			</p>
			{!counter && <Navigate to={"/todos"}/>}
		</div>
	);
};

export default NotFoundPage;