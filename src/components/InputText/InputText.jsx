import React from "react";
import styles from "./InputText.module.scss"

const InputText = ({onChange, value, placeholder}) => {
	return (
		<input className={styles.input} type="text" placeholder={placeholder}
		       onChange={onChange} value={value}/>
	);
};

export default InputText;