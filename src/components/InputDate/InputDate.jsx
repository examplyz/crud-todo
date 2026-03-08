import React, {useEffect} from "react";
import styles from "./InputDate.module.scss";
import getTodayDate from "../../shared/utils/getDate.js";


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