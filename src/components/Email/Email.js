import React from "react";
import classes from "./Email.module.css";

const Email = () => {
	return (
		<form className={classes.form}>
			<div>
				<input placeholder={"Name"} className={classes.small} />
				<input placeholder={"E-Mail Address"} className={classes.small} />
			</div>
			<div>
				<input placeholder={"Your Message"} className={classes.big} />
			</div>
		</form>
	);
};

export default Email;
