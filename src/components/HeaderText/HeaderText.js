import React from "react";
import classes from "./HeaderText.module.css";

const HeaderText = ({ children, style, color, size }) => {
	return (
		<p
			style={{ ...style, color: color, fontSize: size }}
			className={classes.HeaderText}
		>
			{children}
		</p>
	);
};

export default HeaderText;
