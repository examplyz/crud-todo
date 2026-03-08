import React from "react";
import styles from "./Button.module.scss"

const Button = ({children, onClick, color}) => {
	return (
		<button className={styles.button} style={{color, borderColor: color}}
		        onClick={() => onClick()}>
			{children}
		</button>
	);
};

export default Button;