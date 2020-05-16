import React from "react";
import classes from "./BlackButton.module.css";

const BlackButton = ({ text, style, onClick }) => {
	return (
		<button onClick={onClick} className={classes.button} style={{ ...style }}>
			{text}
		</button>
	);
};

export default BlackButton;
