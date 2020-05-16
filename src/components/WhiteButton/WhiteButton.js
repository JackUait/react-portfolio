import React from "react";
import classes from "./WhiteButton.module.css";

const WhiteButton = ({ text, style }) => {
	return (
		<button className={classes.button} style={{ ...style }}>
			{text}
		</button>
	);
};

export default WhiteButton;
