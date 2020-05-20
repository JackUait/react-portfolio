import React from "react";
import classes from "./ProgressBar.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ProgressBar = ({ percent, name }) => {
	if (percent >= 100) percent = 100;
	const { width } = useWindowDimensions();

	const checkPercents =
		percent < 40
			? "#e74c3c"
			: percent >= 40 && percent < 70
			? "#f1c40f"
			: "#2ecc71";
	const checkWidth = width > 800 ? width / 350 : width / 150;

	return (
		<div className={classes.wrapper}>
			<p
				className={classes.name}
				style={{
					color: checkPercents,
				}}
			>
				{name}
			</p>
			<div className={classes.bar} style={{ width: checkWidth * 100 }}>
				<div
					className={classes.insideBar}
					style={{
						background: checkPercents,
						width: checkWidth * percent,
					}}
				></div>
				<span className={classes.percents}>{percent}%</span>
			</div>
		</div>
	);
};

export default ProgressBar;
