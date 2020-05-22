import React from "react";
import classes from "./SubHeader.module.css";

const SubHeader = ({ children, style, size }) => {
	return (
		<p className={classes.SubHeader} style={{ ...style, fontSize: size }}>
			{children}
		</p>
	);
};

export default SubHeader;
