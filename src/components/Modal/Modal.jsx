import React from "react";
import styles from "./Modal.module.scss"

const Modal = ({active, setActive, children}) => {
	return (
		<div className={styles.modal + (active && ` ${styles.modalActive}`)}
		     onClick={() =>
			     setActive(false)
		     }>
			<div className={styles.content + (active && ` ${styles.contentActive}`)}
			     onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;