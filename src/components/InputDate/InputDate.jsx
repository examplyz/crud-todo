import React, {useEffect} from "react";
import styles from "./InputDate.module.scss";

const getTodayDate = () => {
	const date = new Date();
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

const InputDate = ({onChange, value}) => {
	useEffect(() => {
		value || onChange({target: {value: getTodayDate()}})
	}, [])
	return (
		<input className={styles.input} type="date"
		       onChange={onChange} value={value}/>
	);
};

export default InputDate;