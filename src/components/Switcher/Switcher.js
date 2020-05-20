import React from "react";
import classes from "./Switcher.module.css";

const Switcher = ({ amount, onPick }) => {
	const body = [];
	for (let i = 0; i < amount; i++) {
		body.push(
			<li
				className={classes.switcherItem}
				key={i}
				id={i}
				onClick={() => onPick(i)}
			></li>,
		);
	}
	return (
		<div>
			{}
			<ul className={classes.switcher}>{body}</ul>
		</div>
	);
};

export default Switcher;
