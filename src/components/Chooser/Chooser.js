import React from "react";
import classes from "./Chooser.module.css";

const Chooser = () => {
	return (
		<ul className={classes.list}>
			<li className={classes.listItem}>All</li>
			<li className={classes.listItem}>Mobile Apps</li>
			<li className={classes.listItem}>Web</li>
		</ul>
	);
};

export default Chooser;
