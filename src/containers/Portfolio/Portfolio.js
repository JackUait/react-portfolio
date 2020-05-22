import React from "react";
import classes from "./Portfolio.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import Projects from "../../components/Projects/Projects";
import SubHeader from "../../components/SubHeader/SubHeader";

const Portfolio = () => {
	return (
		<div className={classes.wrapper}>
			<HeaderText style={{paddingTop: 15}}>Portfolio</HeaderText>
			<SubHeader>my recent works</SubHeader>
			<Projects />
			<a href="#" className={classes.more}>
				Show more
			</a>
		</div>
	);
};

export default Portfolio;
