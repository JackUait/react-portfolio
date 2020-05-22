import React from "react";
import classes from "./Portfolio.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import Projects from "../../components/Projects/Projects";
import SubHeader from "../../components/SubHeader/SubHeader";

const Portfolio = () => {
	return (
		<div className={classes.wrapper}>
			<HeaderText>Portfolio</HeaderText>
			<SubHeader>my recent works</SubHeader>
			<Projects />
		</div>
	);
};

export default Portfolio;
