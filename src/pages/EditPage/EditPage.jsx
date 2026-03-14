import React from "react";
import Form from "../../components/Form/Form.jsx";
import {useParams} from "react-router";

const EditPage = () => {
	const {id} = useParams();
	return (
		<div>
			<Form type={"edit"} id={Number(id)}/>
		</div>
	);
};

export default EditPage;